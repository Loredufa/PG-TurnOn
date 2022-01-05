import * as React from 'react';
import { TouchableOpacity , StyleSheet, Text, TextInput ,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();  
  return (
      <View>
        <View style={styles.inputContainers}>
          <TextInput
          placeholder="Usuario"
          style={styles.input}
          />
          <TextInput
          placeholder="Contraseña"
          style={styles.input}
          />
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

    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  inputContainers: {
    alignItems: 'center',
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