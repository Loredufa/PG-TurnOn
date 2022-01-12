import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import {styles} from './StylesLocation'


export default function PasswordScreen() {


    const [passState , changePassState] = useState(false);
    const [passEdit , changePass] = useState({
      password:'',
      secondPassword: '',
      errors: {
        password: '',
        secondPassword: '',
    },
    });
    
    
    function handlerPass () {
      changePassState(!passState);
      console.log("Informacion editada", passEdit)
      let infoToSend = {}
      passEdit.password !== '' ? infoToSend={ ...infoToSend , password: passEdit.password} :infoToSend={ ...infoToSend}
      console.log("Informacion a enviar" , infoToSend)
      dispatch(changeUserInfo(user.id , infoToSend))
    }
  
    function handlerChangePass(name , defaultValue) {
      let {errors} = passEdit;
    
      changePass({
              ...passEdit,
              [name]: defaultValue,
              errors
          });
      errors = controlError(errors , name , defaultValue);
      console.log(errors , passEdit);
      validate (passEdit.errors);
  }
    
  
    const [disabled , setDisabled] = useState(true);
  
    function controlError (errors, name , value) {
        switch (name) {
            case "password": 
            errors.password = value.length === 0 || !(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value))? '' : 
            "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos"
              break;
            case "secondPassword": 
              errors.secondPassword = ( value.length === 0 || !(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value)) ) &&
              passEdit.password === value? '' : 
              "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos"
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


  return (
    <View>
            <TextInput 
            name = 'password'
            style={styles.input}
            placeholder= "*******"
            defaultValue ={passEdit.password}
            secureTextEntry={true}
            onChangeText={(e) => handlerChangePass("password", e)}
          /><Text>{passEdit.errors.password}</Text>
          <TextInput 
            name = 'secondPassword'
            style={styles.input}
            placeholder= "*******"
            defaultValue= {passEdit.password}
            secureTextEntry={true}
            onChangeText={(e) => handlerChangePass("secondPassword", e)}
          /><Text>{passEdit.errors.secondPassword}</Text>
          <View style={styles.cuenta}>
            <TouchableOpacity onPress={handlerPass}>
              <View style={styles.btnEdit}>
                <Text style={styles.text}>Guardar</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.btnUser}>
              <TouchableOpacity onPress={()=>changePassState(!passState)}>
                <Text style={styles.text}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
  );
}