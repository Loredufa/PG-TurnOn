import { useNavigation } from "@react-navigation/native";
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
import { changeMessage, closeSession } from "../../store/actions";
import {styles} from './StylesMessage'

export default function Message() {
    const {messageBack} = useSelector(state => state);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    function handlerMessage () {
        if (messageBack.message === "El usuario ha sido borrado correctamente") {
          console.log("ENTRE A ESTE IF")
          dispatch(closeSession());
        }
        else if (messageBack.message === 'La reserva ha sido borrado correctamente') {
          navigation.navigate("Bookings");
        }
        else if (messageBack.message ===  "El pago de la seña fallo" ){
          navigation.navigate("Home");
        }
        else if (messageBack.message === "La reserva se ha registrado correctamente") {
          navigation.navigate("Bookings");
        }
        dispatch (changeMessage());
    }


    return (
    <View style={styles.container}>
        {
            messageBack.success?
            <Text style={styles.question}>{messageBack.success}</Text>
            :
            <Text style ={styles.question}>{messageBack.message}</Text>
        }
      <View style={styles.btnUser}>
              <TouchableOpacity onPress={handlerMessage}>
                <Text style={styles.text}>Aceptar</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
}