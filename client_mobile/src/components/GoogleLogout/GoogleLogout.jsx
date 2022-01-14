import { useNavigation } from "@react-navigation/native";
import React, { useState , useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ActivityIndicator,
  Dimensions,
  Platform
  //Alert
} from "react-native";
import {styles} from './StylesGoogleLogout';
//LogOut
import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import { openAuthSessionAsync } from 'expo-web-browser';
import { useDispatch } from "react-redux";
import { closeSession } from "../../store/actions";
//Para cerrar ventana en web
import { maybeCompleteAuthSession } from 'expo-web-browser';
import { useSelector } from "react-redux";

//Para cerrar la ventana emergente
if (Platform.OS === 'web') {
    maybeCompleteAuthSession();
    }

const auth0ClientId = 'oKKEMLcSuL6qQ64kcVcclFJSLk8esQQp'
const authorizationEndpointOut = "https://dev-jnteeh93.us.auth0.com/v2/logout";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });
console.log("Redirect uri" , redirectUri) //To see de redirectUri

export default function GoogleLogout({route}) {
  //console.log(route.params.email);
  const {googlesession} = useSelector(state => state);
  const dispatch = useDispatch();
  const handlerCloseSession = async () => {
    if (googlesession) {
        try {
          
          await openAuthSessionAsync(`${authorizationEndpointOut}?client_id=${auth0ClientId}&returnTo=${redirectUri}`, 'redirectUrl');
          // handle unsetting your user from store / context / memory
          dispatch(closeSession());
        } catch (err) {
           console.error(err)    
        }
    }
    else {
        dispatch(closeSession());
    }

  }
  console.log("hola google")
  //console.log (route.params.name , route.params.mail)
  return (

    <View style={styles.btnUser}>
        <TouchableOpacity onPress={handlerCloseSession}>
            <Text style={styles.text}>Cerrar Sesion</Text>
        </TouchableOpacity>
    </View>
  );
}
