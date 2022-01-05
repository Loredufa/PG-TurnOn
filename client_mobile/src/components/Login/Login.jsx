import React, { useState } from 'react';
import { TouchableOpacity , StyleSheet, Text, TextInput ,View , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();  
  const [inputs, setInput] = useState({
    user: '',
    password: '',
  });
  const users = [{user: 'franco' , password: '1234'},{user: 'juani' , password: '1234'}]
  function onPressBtn() {
    console.log(inputs)
    const user = users.find((element) => element.user === inputs.user && element.password === inputs.password )
    if (user) {
      alert ("Usuario valido")
    }
    else {
      alert ("Usuario no valido")
    }
  }

  return (
      <View>
        <View style={styles.inputContainers}>
        <Image source={require('./Logo.jpg')} />
          <TextInput
          placeholder="Usuario"
          style={styles.input}
          onChangeText={ user => setInput({...inputs , user})}
          defaultValue={inputs.user}
          />
          <TextInput
          placeholder="Contraseña"
          style={styles.input}
          onChangeText={ password => setInput({...inputs , password})}
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
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.register}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  input: {
    width: 280,
    height: 40,

    marginTop:15,
    
    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: 'white',

    paddingLeft: 10,
  },
  inputContainers: {
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
    width: 130,
    height: 35,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black'
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  register: {
    marginLeft: 10,
    color: 'blue',
  },
  acount: {
    marginRight: 10,
  },
});