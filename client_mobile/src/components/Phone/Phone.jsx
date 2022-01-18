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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeUserInfo } from "../../store/actions";
import {styles} from './StylesPhone'

export default function Phone() {

    const [infoEdit , changeInfo] = useState({
        phone: '',
        errors: {
          phone: '',
      },
    });
    const {user} = useSelector(state => state);
    const [disabled , setDisabled] = useState(true);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    function handlerChangeInfo(name , defaultValue) {
        let {errors} = infoEdit;
      
        changeInfo({
                ...infoEdit,
                [name]: defaultValue,
                errors
            });
        errors = controlError(errors , name , defaultValue);
        console.log(errors , infoEdit);
        validate (infoEdit.errors);
    }

    function controlError (errors, name , value) {
        switch (name) {
            case 'phone': 
              errors.phone = value.length > 9 ? '': 'Teléfono no puede estar vacio' ;
            break;
            default:
              break;
          }
          return errors;
    }
  
    
    function validate (errors) {
        let haveErrors = false;
        for (let clave in errors) {
            errors[clave].length > 0 && (haveErrors=true);
        }
        if (haveErrors) {setDisabled(true)}
        else {(setDisabled(false))}
    }

    function handlerNewPhone () {
        dispatch(changeUserInfo(user.user.id , {phone: infoEdit.phone}))
        navigation.navigate("HomeTab")
      }


  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require("../Login/Logo.jpg")} />
      </View>
      <View style={styles.container}>
        <Text style={styles.question}>Para continuar, especificar un número de telefono</Text>
        <TextInput 
                name= 'phone'
                style={styles.input}
                defaultValue={infoEdit.phone}
                keyboardType="phone-pad"
                onChangeText={(e) => handlerChangeInfo("phone", e)}
              /><Text style={styles.error}>{infoEdit.errors.phone}</Text>
        <TouchableOpacity disabled={disabled} onPress={handlerNewPhone} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>Aceptar</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
