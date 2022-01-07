import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { findCreatedUser } from "../../store/actions/index";

export default function Login() {
  const navigation = useNavigation();
  const [inputs, setInput] = useState({
    user: "",
    password: "",
  });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function onPressBtn() {
    dispatch(findCreatedUser(inputs));
  }

  if (user.user) {
    navigation.navigate("HomeTab");
  } else if (user.message) {
    alert("Usuario no valido");
  }
  return (
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
        <TouchableOpacity onPress={onPressBtn}>
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

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    width: 280,
    height: 40,

    marginTop: 15,

    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: "white",

    paddingLeft: 10,
  },
  inputContainers: {
    alignItems: "center",
  },
  button: {
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
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "black",
  },
  registerContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  register: {
    marginLeft: 10,
    color: "blue",
  },
  acount: {
    marginRight: 10,
  },
});
