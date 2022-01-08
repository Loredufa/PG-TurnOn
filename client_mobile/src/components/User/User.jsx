import React, { useState } from "react";
import {useSelector , useDispatch} from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import {closeSession , changeUserInfo} from '../../store/actions/index';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

export default function User() {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [editState , changeEdit] = useState(false);
  const [infoEdit , changeInfo] = useState({
    name: user.name,
    lastname: user.lastname,
    phone: user.phone,
    mail: user.mail,
    password: "*******",
    secondPassword: "*******",
    errors: {
      name: '',
      lastname: '',
      phone: '',
      mail: '' ,
      password: '',
      secondPassword: '',
  },
  });
  
  function handlerCloseSession () {
    dispatch(closeSession());
    //navigation.navigate("Login");
  }
  
  function handlerNewInfo () {
    changeEdit(!editState);
    dispatch(changeUserInfo(infoEdit))
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
  

  const [disabled , setDisabled] = useState(true);

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
          case "password": 
          errors.password = value.length === 0 || !(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value))? '' : 
          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos"
            break;
          case "secondPassword": 
            errors.secondPassword = ( value.length === 0 || !(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value)) ) &&
            infoEdit.password === value? '' : 
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
              <TextInput 
                name = 'password'
                style={styles.input}
                placeholder={infoEdit.password}
                secureTextEntry={true}
                onChangeText={(e) => handlerChangeInfo("password", e)}
              /><Text>{infoEdit.errors.password}</Text>
              <TextInput 
                name = 'secondPassword'
                style={styles.input}
                placeholder={infoEdit.secondPassword}
                secureTextEntry={true}
                onChangeText={(e) => handlerChangeInfo("secondPassword", e)}
              /><Text>{infoEdit.errors.secondPassword}</Text>
              <View style={styles.cuenta}>
                <TouchableOpacity onPress={handlerNewInfo}>
                  <View style={styles.btnEdit}>
                    <Text style={styles.text}>Guardar</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.btnUser}>
                  <TouchableOpacity onPress={()=>changeEdit(!editState)}>
                    <Text style={styles.text}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            :
            <View style={styles.inputContainers}>
              <View style={styles.input}><Text style={styles.info}>{user.name}</Text></View>
              <View style={styles.input}><Text style={styles.info}>{user.lastname}</Text></View>
              <View style={styles.input}><Text style={styles.info}>{user.phone}</Text></View>
              <View style={styles.input}><Text style={styles.info}>{user.mail}</Text></View>
              <View style={styles.input}><Text style={styles.info}>**********</Text></View> 
              <TouchableOpacity onPress={()=>changeEdit(!editState)}>
                <View style={styles.btnEdit}>
                  <Text style={styles.text}>Editar Informacion</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.cuenta}>
                <View style={styles.btnUser}>
                  <TouchableOpacity onPress={handlerCloseSession}>
                    <Text style={styles.text}>Cerrar Sesion</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnUser}>
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

const styles = StyleSheet.create({
  inputContainers: {
    alignItems: "center",
  },
  input: {
    width: 280,
    height: 40,

    marginTop: 15,

    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: "white",

    paddingLeft: 10,
  
    alignContent: 'center',
    justifyContent: 'center',
  },
  info: {
    textAlign: 'center',
  },
  btnUser: {
    marginTop: 40,
    width: 130,
    height: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  cuenta: {
    display: "flex",
    flexDirection: "row",
    alignSelf: 'center',
  },
  text: {
    textAlign: "center",
    padding: 20,
    color: "black",
  },
  btnEdit: {
    alignSelf: "center",
    marginTop: 40,
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
