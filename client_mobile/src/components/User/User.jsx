import React, { useState } from "react";
import {useSelector , useDispatch} from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import {closeSession , changeUserInfo , changeUserPass} from '../../store/actions/index';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import {styles} from './StylesUser';
import Message from "../Message/Message";

export default function User() {
  
  const navigation = useNavigation();
  const {user} = useSelector(state => state.user);
  const { messageBack } = useSelector(state => state);
  const dispatch = useDispatch();

  
  const [passState , changePassState] = useState(false);
  const [passEdit , changePass] = useState({
    actualPass: '',
    password:'',
    secondPassword: '',
    errors: {
      actualPass: '',
      password: '',
      secondPassword: '',
  },
  });
  
  
  function handlerPass () {
    changePassState(!passState);
    console.log("Informacion editada", passEdit)
    let infoToSend = {}
    passEdit.actualPass !== '' ? infoToSend={ ...infoToSend , actualPass: passEdit.actualPass} :infoToSend={ ...infoToSend}
    passEdit.password !== '' ? infoToSend={ ...infoToSend , password: passEdit.password} :infoToSend={ ...infoToSend}
    console.log("Informacion a enviar" , infoToSend)
    dispatch(changeUserPass(user.id , infoToSend))
  }

  function handlerChangePass(name , defaultValue) {
    let {errors} = passEdit;
  
    changePass({
            ...passEdit,
            [name]: defaultValue,
            errors
        });
    errors = controlErrorPass(errors , name , defaultValue);
    console.log(errors , passEdit);
    validatePass (passEdit.errors);
}
  

  const [disabled , setDisabled] = useState(true);

  function controlErrorPass (errors, name , value) {
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
          case "actualPass":
            errors.actualPass = ( value.length === 0 || !(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value)) ) ? '' : 
            "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos"
              break;
          default:
            break;
        }
        return errors;
  }

  
  function validatePass (errors) {
      let haveErrors = false;
      for (let clave in errors) {
          errors[clave].length > 0 && (haveErrors=true);
      }
      if (haveErrors) {setDisabled(true)}
      else {(setDisabled(false))}
  }


  const [editState , changeEdit] = useState(false);
  const [infoEdit , changeInfo] = useState({
    name: user.name,
    lastname: user.lastname,
    phone: user.phone,
    mail: user.mail,
    errors: {
      name: '',
      lastname: '',
      phone: '',
      mail: '' ,
  },
  });
  
  function handlerCloseSession () {
    dispatch(closeSession());
    //navigation.navigate("Login");
  }
  
  function handlerNewInfo () {
    changeEdit(!editState);
    console.log("Informacion editada", infoEdit)
    let infoToSend = {}
    user.name !== infoEdit.name ? infoToSend={ ...infoToSend , name: infoEdit.name} :infoToSend={ ...infoToSend}
    user.lastname !== infoEdit.lastname ? infoToSend={ ...infoToSend , lastname: infoEdit.lastname} :infoToSend={ ...infoToSend}
    user.phone !== infoEdit.phone ? infoToSend={ ...infoToSend , phone: infoEdit.phone} :infoToSend={ ...infoToSend}
    user.mail !== infoEdit.mail ? infoToSend={ ...infoToSend , mail: infoEdit.mail} :infoToSend={ ...infoToSend}
    //infoEdit.password !== '' ? infoToSend={ ...infoToSend , password: infoEdit.password} :infoToSend={ ...infoToSend}
    console.log("Informacion a enviar" , infoToSend)
    dispatch(changeUserInfo(user.id , infoToSend))
  }

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
  

 // const [disabled , setDisabled] = useState(true);

  function controlError (errors, name , value) {
      switch (name) {
          case 'name': 
            errors.name = value.length > 0 ? '' : 'Nombre no puede estar vacio';
            break;
          case 'lastname': 
            errors.lastname = value.length > 0 ? '': 'Apellido no puede estar vacio' ;
            break;
          case 'phone': 
            errors.phone = value.length > 10 ? '': 'Teléfono no puede estar vacio' ;
            break;
          case "mail": 
          errors.mail = !(!/\S+@\S+\.\S+/.test(value)) ? '' : 'Ingresar un mail valido'
            break;
          /*case "password": 
          errors.password = value.length === 0 || !(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value))? '' : 
          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos"
            break;
          case "secondPassword": 
            errors.secondPassword = ( value.length === 0 || !(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value)) ) &&
            infoEdit.password === value? '' : 
            "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos"
              break;*/
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
        <Text style={styles.title}>Mi perfil</Text>
        <View>
          {
            editState? 
            <View style={styles.inputContainers}>
              <TextInput 
                name='name'
                style={styles.input}
                defaultValue={infoEdit.name}
                onChangeText={(e) => handlerChangeInfo("name", e)}
              /><Text>{infoEdit.errors.name}</Text>
              <TextInput 
                name= 'lastname'
                style={styles.input}
                defaultValue={infoEdit.lastname}
                onChangeText={(e) => handlerChangeInfo("lastname", e)}
              /><Text>{infoEdit.errors.lastname}</Text>
              <TextInput 
                name= 'phone'
                style={styles.input}
                defaultValue={infoEdit.phone}
                onChangeText={(e) => handlerChangeInfo("phone", e)}
              /><Text>{infoEdit.errors.phone}</Text>
              <TextInput 
                name = 'mail'
                style={styles.input}
                defaultValue={infoEdit.mail}
                onChangeText={(e) => handlerChangeInfo("mail", e)}
              /><Text>{infoEdit.errors.mail}</Text>
              <View style={styles.cuenta}>
                <TouchableOpacity onPress={handlerNewInfo}>
                  <View style={styles.btnUser}>
                    <Text style={styles.text}>Guardar</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.btnDelete}>
                  <TouchableOpacity onPress={()=>changeEdit(!editState)}>
                    <Text style={styles.text}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            :
            passState?
            <View style={styles.inputContainers}>
            <Text>Contraseña Actual:</Text>
            <TextInput 
            name = 'actualPass'
            style={styles.input}
            placeholder= "*******"
            defaultValue ={passEdit.actualPass}
            secureTextEntry={true}
            onChangeText={(e) => handlerChangePass("actualPass", e)}
            /><Text>{passEdit.errors.actualPass}</Text>
            <Text>Contraseña nueva:</Text>
            <TextInput 
            name = 'password'
            style={styles.input}
            placeholder= "*******"
            defaultValue ={passEdit.password}
            secureTextEntry={true}
            onChangeText={(e) => handlerChangePass("password", e)}
            /><Text>{passEdit.errors.password}</Text>
            <Text>Repetir contraseña nueva:</Text>
          <TextInput 
            name = 'secondPassword'
            style={styles.input}
            placeholder= "*******"
            defaultValue= {passEdit.secondPassword}
            secureTextEntry={true}
            onChangeText={(e) => handlerChangePass("secondPassword", e)}
          /><Text>{passEdit.errors.secondPassword}</Text>
          <View style={styles.cuenta}>
            <TouchableOpacity onPress={handlerPass}>
              <View style={styles.btnUser}>
                <Text style={styles.text}>Guardar</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.btnDelete}>
              <TouchableOpacity onPress={()=>changePassState(!passState)}>
                <Text style={styles.text}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
            :
            messageBack !== ''?
            <Message />
            :
            user.name !== infoEdit.name || user.lastname !== infoEdit.lastname || user.phone !== infoEdit.phone || user.mail !== infoEdit.mail ?
            <ActivityIndicator size="large" color="#00ff00" />
            :
            <View style={styles.inputContainers}>
              <View style={styles.input}><Text style={styles.info}>{user.name}</Text></View>
              <View style={styles.input}><Text style={styles.info}>{user.lastname}</Text></View>
              <View style={styles.input}><Text style={styles.info}>{user.phone}</Text></View>
              <View style={styles.input}><Text style={styles.info}>{user.mail}</Text></View>
              <View style={styles.input}><Text style={styles.info}>**********</Text></View> 
              
              <View style={styles.cuenta}>
                <TouchableOpacity onPress={()=>changeEdit(!editState)}>
                <View style={styles.btnUser}>
                  <Text style={styles.text}>Editar Informacion</Text>
                </View>
                </TouchableOpacity>
                <View style={styles.btnUser}>
                  <TouchableOpacity onPress={() => changePassState(!passState)}>
                    <Text style={styles.text}>Modificar contraseña</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.cuenta}>
                <View style={styles.btnUser}>
                  <TouchableOpacity onPress={handlerCloseSession}>
                    <Text style={styles.text}>Cerrar Sesion</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnDelete}>
                  <TouchableOpacity onPress={() => console.log("Eliminar cuenta")}>
                    <Text style={styles.text}>Eliminar cuenta</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
    }
  </View>
</View>
  );
}

