import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import HomeTab from "../Home/HomeTab";
import { useNavigation } from "@react-navigation/native";

export default function Courts({ route }) {
  const navigation = useNavigation();
  return (
    <View>
      <Text>{route.params.name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("HomeTab")}>
        <Text style={styles.home}>Home</Text>
      </TouchableOpacity>
      {/* <HomeTab /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
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
});
