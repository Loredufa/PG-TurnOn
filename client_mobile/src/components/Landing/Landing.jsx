import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../Home/HomeTab";
import User from "../User/User";

export default function Landing() {
    const navigation = useNavigation();
  return (
    <View>
      <Image style={styles.img} source={require("../Login/Logo.jpg")} />
      <View style={styles.container}>
        <Text>Bienvenido!</Text>
        <Text>¿Permitis acceder a tu ubicación?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("HomeTab")}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Aceptar</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    img: {
      width: 150,
      height: 100,
      alignSelf: "center",
      marginTop: 50,
      marginBottom: 20,
    },
    container: {
        alignItems: "center",
    },
    button: {
        marginTop: 30,
        width: 130,
        height: 35,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
      },
      buttonText: {
        textAlign: "center",
        padding: 20,
        color: "black",
      },
})