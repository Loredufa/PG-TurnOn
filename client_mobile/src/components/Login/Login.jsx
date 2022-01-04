import * as React from 'react';
import { TouchableOpacity , StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();  
  return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Registrarme</Text>
        </TouchableOpacity>
      </View>
    );
  }