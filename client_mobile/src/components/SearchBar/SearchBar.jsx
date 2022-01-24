import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./StyleSearchBar";
import { getSuppliersByName , getFavorites, getSupplierBySport } from "../../store/actions/index";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Suppliers from "../Suppliers/Suppliers";

export default function SearchBar({screen}) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { court , user} = useSelector((state) => state);
  const navigation = useNavigation();

  const [find , setFind] = useState(false);

  const screenWidth = useSelector((state) => state.screenWidth);
  function handlerFindCourt() {
    if(screen === "Favoritos") {
      setFind(true);
      dispatch(getFavorites(user.user.id , input))
    } 
    else if (screen){
      setFind(true);
      dispatch(getSuppliersByName(input , screen));
    }else {
      dispatch(getSuppliersByName(input));
      setInput("");
      //if (court === input) {
      navigation.navigate("Suppliers", { type: "Tu busqueda" });
      /*}
      else {
        alert("Cancha no encontrada")
      }*/
    }
  }
  function handlerGoBack() {
    setFind(false);
    if(screen === "Favoritos") {
      dispatch(getFavorites(user.user.id));
      setInput("");
    } 
    else if(screen) {
      dispatch(getSupplierBySport(screen));
      setInput("");
    }
  }

  return (
    <View style={styles.containerSearch}>
       {find &&<TouchableOpacity
        style={[
          styles.button,
          { width: screenWidth / 10, height: screenWidth / 10 },
        ]}
        onPress={handlerGoBack}
      >
        <MaterialCommunityIcons name="chevron-back-outline" size={30} color="#179F34" />
      </TouchableOpacity>}
      <View style={[styles.posInput, { height: screenWidth / 8.2 }]}>
        <TextInput
          placeholder="Nombre"
          name="name"
          style={[
            styles.input,
            { width: screenWidth / 1.5, height: screenWidth / 10 },
          ]}
          onChangeText={(court) => setInput(court)}
          defaultValue={input}
          value={input}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          { width: screenWidth / 10, height: screenWidth / 10 },
        ]}
        onPress={handlerFindCourt}
      >
        <MaterialCommunityIcons name="search" size={30} color="#179F34" />
      </TouchableOpacity>
    </View>
  );
}
