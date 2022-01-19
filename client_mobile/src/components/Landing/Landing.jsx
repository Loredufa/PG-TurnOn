import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../Home/HomeTab";
import User from "../User/User";
import { styles } from "./StylesLanding";
import * as SecureStore from "expo-secure-store";
import { useSelector, useDispatch } from "react-redux";
//COMO NO FUNCIONA EL BACK EN EXPO SE AGREGA ESTO
import { setScreenDimensions } from "../../store/actions/index";

export default function Landing() {
  const navigation = useNavigation();

  const { user } = useSelector((state) => state);
  const screenWidth = useSelector((state) => state.screenWidth);

  /*    
    const {user} = useSelector(state => state)

    async function save(key, value) {
      await SecureStore.setItemAsync(key, value);
    }

    useEffect(()=> {
      save('token' , user.token);
    },[])
*/

  // COMO NO FUNCIONA EL BACK EN EXPO AGREGO ESTAS LINEAS
  /*
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
    dispatch(
      setScreenDimensions(
        dimension.screenWidth,
        numColumns,
        dimension.titleSize
      )
    );
  }, [screenWidth]);
*/

  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image
          style={[
            styles.img,
            { width: screenWidth / 2.75, height: screenWidth / 4.1 },
          ]}
          source={require("../Login/Logo.jpg")}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenido!</Text>
        <Text style={styles.slogan}>Revoluciona tus reservas</Text>
        <Text style={styles.slogan}>
          No mas filas. No mas llamadas. No mas espera.
        </Text>
        <Text style={styles.question}>¿Permitis acceder a tu ubicación?</Text>

        <TouchableOpacity
          onPress={() =>
            user?.user.phone === "0000000000"
              ? navigation.navigate("Phone")
              : navigation.navigate("HomeTab")
          }
        >
          <View
            style={[
              styles.button,
              { width: screenWidth / 3.2, height: screenWidth / 11.5 },
            ]}
          >
            <Text style={styles.buttonText}>Aceptar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
