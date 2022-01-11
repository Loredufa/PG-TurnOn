import React, { useState , useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { findCreatedUser } from "../../store/actions/index";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setScreenDimensions} from '../../store/actions/index';
import {styles} from './StylesLogin';



export default  function Login() {

  const dispatch = useDispatch();
  const screenWidth = Dimensions.get("window").width;
  const numColumns = 6;
  const titleSize = screenWidth / numColumns;


  const [dimension, setDimension] = useState({ screenWidth , titleSize });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ screenWidth, titleSize }) => {
        setDimension({ screenWidth, titleSize });
      }
    );
    return () => subscription?.remove();
  });


  useEffect(()=>{
    dispatch(setScreenDimensions(screenWidth, numColumns, titleSize));
  },[screenWidth])





  // SOMEWHERE INSIDE LOGIN.JS
  const [loading , setLoading] = useState(false);
const handleStartPress = () => {
  // WE COULD DISPATCH FROM HERE
  // HOWEVER, THAT WOULD NOT TRIGGER THE LOADING VIEW
  setLoading(true);
};

useEffect(async () => {
  let timer;
  
  if (loading) {
    //setClicked(true);
    dispatch(findCreatedUser(inputs));
    
    
    timer = await setTimeout(() => {
      //dispatch({ type: 'LOGIN', data: { email, password } });
    setLoading(false);
    }, 1000);

  }

  return () => clearTimeout(timer);

  
}, [loading]);


  const navigation = useNavigation();
  //const [clicked, setClicked] = useState(false);
  const [inputs, setInput] = useState({
    user: "",
    password: "",
  });
  const user = useSelector((state) => state.user);

  function onPressBtn() {
    dispatch(findCreatedUser(inputs));
    //setClicked(true);
  }
  /*
  if (user.user) {
    //await AsyncStorage.setItem('isLoggedIn' , '1');
    //navigation.navigate("HomeTab");
  } else 
  if (clicked && user.message) {
    alert("Usuario no valido");
    setClicked(false);
  }*/
  return (
    loading? 
    <ActivityIndicator size="large" color="#00ff00" /> 
    :
    <View>
      <Image style={styles.img} source={require("./Logo.jpg")} />
      <View style={styles.inputContainers}>
        <TextInput
          placeholder="Usuario"
          style={styles.input}
          onChangeText={(user) => setInput({ ...inputs, user })}
          defaultValue={inputs.user}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          onChangeText={(password) => setInput({ ...inputs, password })}
          defaultValue={inputs.password}
          secureTextEntry={true}
        />
        {user.message && <Text>Usuario o contraseña incorrectos</Text>}
        <TouchableOpacity onPress={handleStartPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.acount}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.register}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

