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
import { styles } from './StylesLanding'

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

