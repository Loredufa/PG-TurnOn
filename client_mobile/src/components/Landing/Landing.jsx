import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../Home/HomeTab";
import User from "../User/User";
import { styles } from "./StylesLanding";
import * as SecureStore from "expo-secure-store";
import { useSelector, useDispatch } from "react-redux";

import {
  setScreenDimensions,
  getAllSuppliers,
  changeUserInfo,
  getSupplierLocation,
  getGeoLocation,
  getSupplierByLocationRating,
} from "../../store/actions/index";
import * as GeoLocation from "expo-location";

export default function Landing() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const screenWidth = useSelector((state) => state.screenWidth);

  useEffect(() => {
    dispatch(getSupplierLocation());
  }, []);

  /*    
    const {user} = useSelector(state => state)

    async function save(key, value) {
      await SecureStore.setItemAsync(key, value);
    }

    useEffect(()=> {
      save('token' , user.token);
    },[])
*/

  // COMO NO FUNCIONA EL BACK EN EXPO AGREGO ESTAS LINEAS
  /*
  const dispatch = useDispatch();
  const screenWidth = Dimensions.get("window").width;
  const numColumns = 6;
  const titleSize = screenWidth / numColumns;

  const [dimension, setDimension] = useState({ screenWidth, titleSize });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ screenWidth, titleSize }) => {
        setDimension({ screenWidth, titleSize });
      }
    );
    return () => subscription?.remove();
  });

  useEffect(() => {
    dispatch(
      setScreenDimensions(
        dimension.screenWidth,
        numColumns,
        dimension.titleSize
      )
    );
  }, [screenWidth]);
*/

  useEffect(() => {
    //if (user.user.location) {
    (async () => {
      let { status } = await GeoLocation.requestForegroundPermissionsAsync();
      !user.user.location ? (status = "denied") : (status = status);
      //console.log("STATUS", status);
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        dispatch(getGeoLocation({}));
        return;
      }
      let location = await GeoLocation.getCurrentPositionAsync({});
      console.log("MI UBICACION", location);
      //setLocation(location);
      dispatch(getGeoLocation(location));
      dispatch(
        getSupplierByLocationRating(
          location.coords.latitude,
          location.coords.longitude
        )
      );
      // setReadyToGo(true);
      //console.log("estoy", location);
    })();
    // } else {

    //(async () => {
    //await location.remove();
    //console.log("REMOVE", location);

    // dispatch(getGeoLocation({}));
    //})();
    // }
  }, [user.user.location]);

  const handleChange = () => {
    dispatch(changeUserInfo(user.user.id, { location: true }));
    user?.user.phone === "0000000000"
      ? navigation.navigate("Phone")
      : navigation.navigate("HomeTab");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image
          style={[
            styles.img,
            { width: screenWidth / 2.75, height: screenWidth / 4.1 },
          ]}
          source={require("../Login/Logo.jpg")}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenido!</Text>
        <Text style={styles.slogan}>Revoluciona tus reservas</Text>
        <Text style={styles.slogan}>
          No mas filas. No mas llamadas. No mas espera.
        </Text>
        {user.user.location ? (
          <TouchableOpacity
            onPress={() =>
              user?.user.phone === "0000000000"
                ? navigation.navigate("Phone")
                : navigation.navigate("HomeTab")
            }
          >
            <View
              style={[
                styles.button,
                { width: screenWidth / 3.2, height: screenWidth / 11.5 },
              ]}
            >
              <Text style={styles.buttonText}>Comenzar</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={{ alignItems: "center" }}>
            <Text style={styles.question}>
              ¿Permitis acceder a tu ubicación?
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={() => handleChange()}>
                <View
                  style={[
                    styles.button,
                    { width: screenWidth / 3.2, height: screenWidth / 11.5 },
                  ]}
                >
                  <Text style={styles.buttonText}>Aceptar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  user?.user.phone === "0000000000"
                    ? navigation.navigate("Phone")
                    : navigation.navigate("HomeTab")
                }
              >
                <View
                  style={[
                    styles.button,
                    {
                      width: screenWidth / 3.2,
                      height: screenWidth / 11.5,
                      backgroundColor: "#E9EBED",
                    },
                  ]}
                >
                  <Text style={[styles.buttonText, { color: "black" }]}>
                    Cancelar
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
