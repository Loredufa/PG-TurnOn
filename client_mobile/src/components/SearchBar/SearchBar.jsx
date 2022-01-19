import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {styles} from './StyleSearchBar';
import { getSuppliersByName } from "../../store/actions/index";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Suppliers from "../Suppliers/Suppliers";

export default function SearchBar() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const {court} = useSelector(state => state);
    const navigation = useNavigation();

    function handlerFindCourt () {
      dispatch(getSuppliersByName(input))
      setInput("");
      //if (court === input) {
        navigation.navigate ('Suppliers' , {type: "Busqueda"})
      /*}
      else {
        alert("Cancha no encontrada")
      }*/
    }
  
    return (
      <View style={styles.containerSearch}>
        <View style={styles.posInput}>
        <TextInput
          placeholder="Nombre"
          name="name"
          style={styles.input}
          onChangeText={(court) => setInput(court)}
          defaultValue={input}
        />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handlerFindCourt}
        >
          <MaterialCommunityIcons name="search" size={30} color="#179F34" />
        </TouchableOpacity>
      </View>
  );
}