import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ActivityIndicator,
  Dimensions,
  Platform,
  //Alert
} from "react-native";
//Google Login
import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
//Para cerrar ventana en web
import { maybeCompleteAuthSession } from "expo-web-browser";
import { styles } from "./StylesGoogleLogin";
import { useDispatch, useSelector } from "react-redux";
import { googleLogIn } from "../../store/actions";

//Para cerrar la ventana emergente
if (Platform.OS === "web") {
  maybeCompleteAuthSession();
}

const auth0ClientId = "oKKEMLcSuL6qQ64kcVcclFJSLk8esQQp";
const authorizationEndpoint = "https://dev-jnteeh93.us.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });
//console.log("Redirect uri" , redirectUri) //To see de redirectUri

export default function GoogleLogin() {
  const navigation = useNavigation();
  //   const [userInfo , changeUserInfo] = useState({
  //     name: '',
  //     mail: ''
  //   });
  const dispatch = useDispatch();
  const screenWidth = useSelector((state) => state.screenWidth);
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile", "email"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);
        //console.log("El token: ",jwtToken);
        //console.log("Decoded: ", decoded);
        const { name, email } = decoded;
        console.log("Nombre: ", name, " Mail: ", email);
        //changeUserInfo({name: name , mail: email})
        //navigation.navigate("Logout" , {name: name , mail: email});
        dispatch(googleLogIn(jwtToken));
      }
    }
  }, [result]);

  async function handlerLogin() {
    await promptAsync({ useProxy });
    //navigation.navigate("Logout" , {name: userInfo.name , mail: "franco@mail"});
  }

  // console.log( "Request: " , request);
  // console.log("Result" , result);

  return (
    <TouchableOpacity onPress={handlerLogin}>
      <View
        style={[
          styles.btn,
          { width: screenWidth / 1.8, height: screenWidth / 11.5 },
        ]}
      >
        <Image
          source={{
            uri: "https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1",
          }}
          style={[
            styles.img,
            { width: screenWidth / 13.8, height: screenWidth / 13.8 },
          ]}
        />
        <Text style={styles.text}>Continuar con Google</Text>
      </View>
    </TouchableOpacity>
  );
}
