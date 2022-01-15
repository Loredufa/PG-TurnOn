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
import { changeMessage } from "../../store/actions";
import {styles} from './StylesMessage'

export default function Message() {
    const {messageBack} = useSelector(state => state);
    const dispatch = useDispatch();
    
    function handlerMessage () {
        dispatch (changeMessage());
    }


    return (
    <View style={styles.container}>
        {
            messageBack.success?
            <Text style={styles.title}>{messageBack.success}</Text>
            :
            <Text>{messageBack.message}</Text>
        }
      <View style={styles.btnUser}>
              <TouchableOpacity onPress={handlerMessage}>
                <Text style={styles.text}>Aceptar</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
}