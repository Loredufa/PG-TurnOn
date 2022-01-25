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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { findCreatedUser } from "../../store/actions/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  setScreenDimensions,
  getAllSuppliers,
} from "../../store/actions/index";
import { styles } from "./StylesLogin";
import * as SecureStore from "expo-secure-store";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

export default function Login() {
  const dispatch = useDispatch();
  const screenWidth = Dimensions.get("window").width;
  const numColumns = 6;
  const titleSize = screenWidth / numColumns;

  const [dimension, setDimension] = useState({ screenWidth, titleSize });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ screenWidth, titleSize }) => {
        setDimension({ screenWidth, titleSize });
      }
    );
    return () => subscription?.remove();
  });

  useEffect(() => {
    dispatch(setScreenDimensions(screenWidth, numColumns, titleSize));
  }, [screenWidth]);

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, []);
  /*

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      console.log(result);
    } else {
      console.log('No values stored under that key.');
    }
  }

  useEffect(()=> {
    getValueFor('token');
  },[])

*/

  // SOMEWHERE INSIDE LOGIN.JS
  const [loading, setLoading] = useState(false);
  const [press, setPress] = useState(false);
  const handleStartPress = () => {
    // WE COULD DISPATCH FROM HERE
    // HOWEVER, THAT WOULD NOT TRIGGER THE LOADING VIEW
    setLoading(true);
    setPress(true);
  };

  useEffect(async () => {
    let timer;

    if (loading) {
      //setClicked(true);
      dispatch(findCreatedUser(inputs));

      timer = await setTimeout(() => {
        //dispatch({ type: 'LOGIN', data: { email, password } });
        setLoading(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [loading]);

  const navigation = useNavigation();
  //const [clicked, setClicked] = useState(false);
  const [inputs, setInput] = useState({
    user: "",
    password: "",
  });
  const user = useSelector((state) => state.user);

  function onPressBtn() {
    dispatch(findCreatedUser(inputs));
    //setClicked(true);
  }
  /*
  if (user.user) {
    //await AsyncStorage.setItem('isLoggedIn' , '1');
    //navigation.navigate("HomeTab");
  } else 
  if (clicked && user.message) {
    alert("Usuario no valido");
    setClicked(false);
  }*/
  return loading ? (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  ) : (
    <View>
      <Image
        style={[
          styles.img,
          { width: screenWidth / 2.8, height: screenWidth / 4 },
        ]}
        source={require("./Logo.jpg")}
      />
      <View style={styles.inputContainers}>
        <TextInput
          placeholder="Usuario"
          style={[
            styles.input,
            { width: screenWidth / 1.5, height: screenWidth / 10 },
          ]}
          onChangeText={(user) => setInput({ ...inputs, user })}
          defaultValue={inputs.user}
        />
        <TextInput
          placeholder="Contraseña"
          style={[
            styles.input,
            { width: screenWidth / 1.5, height: screenWidth / 10 },
          ]}
          onChangeText={(password) => setInput({ ...inputs, password })}
          defaultValue={inputs.password}
          secureTextEntry={true}
        />
        {user.message && press && (
          <Text style={styles.error}>Usuario o contraseña incorrectos</Text>
        )}
        <TouchableOpacity onPress={handleStartPress}>
          <View
            style={[
              styles.button,
              { width: screenWidth / 3.2, height: screenWidth / 11.5 },
            ]}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: screenWidth / 1.5,
            alignItems: "center",
            flexDirection: "row",
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <View
            style={{ borderBottomWidth: 1, width: screenWidth / 3.2 }}
          ></View>
          <Text style={{ marginRight: 5, marginLeft: 5 }}>O</Text>
          <View
            style={{ borderBottomWidth: 1, width: screenWidth / 3.2 }}
          ></View>
        </View>
      </View>
      <GoogleLogin />
      <View
        style={{
          borderBottomWidth: 1,
          width: screenWidth / 1.5,
          alignSelf: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      ></View>
      <View style={styles.registerContainer}>
        <Text style={styles.acount}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.register}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
