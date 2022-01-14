import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, bookCourt } from "../../store/actions/index";
import { styles } from "./StyleCourtDetail";

import Message from "../Message/Message";

export default function CourtDetail({ route }) {
  const dispatch = useDispatch();
   const {user, favorites , messageBack} = useSelector(state => state)
  console.log(favorites);
  function handlerBooking() {
    dispatch(bookCourt(route.params.court.id , user.user.id));

  }
  const screenWidth = useSelector((state) => state.screenWidth);
  const titleSize = useSelector((state) => state.titleSize);
  const { court } = route.params;

  //console.log(court);

  return (
    messageBack !== ''?
    <Message />
    :
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={{ marginRight: 20 }}>{court.name}</Text>
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={25}
          color={"black"}
          style={{ marginLeft: 10, marginRight: 20 }}
        />
      </View>
      <Image
        source={court.img}
        style={{
          flex: 2,
          height: screenWidth / 6,
          width: screenWidth / 2,
          padding: 3,
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <View style={styles.optionsContainer}>
        <Text style={{ marginRight: 20, borderWidth: 1 }}>Horario</Text>
        <Text style={{ marginLeft: 10, marginRight: 20, borderWidth: 1 }}>
          Dia
        </Text>
      </View>
      <Text style={{ flex: 1, borderWidth: 1 }}>Tamaño</Text>
      <Text style={{ flex: 1 }}>Precio: </Text>

      <TouchableOpacity style={styles.button} onPress={handlerBooking}>

      

        {/* <View style={styles.button}> */}
        <Text style={styles.buttonText}>Reservar</Text>
        {/* </View> */}
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          padding: 3,
        }}
      >
        <TouchableOpacity onPress={() => dispatch(addToFavorite(court))}>
          {favorites.find((element) => element.name === court.name) ? (
            <MaterialCommunityIcons
              name="heart"
              size={25}
              color="red"
              style={{ marginLeft: 10, marginRight: 20 }}
            />
          ) : (
            <MaterialCommunityIcons
              name="heart-outline"
              size={25}
              color="black"
              style={{ marginLeft: 10, marginRight: 20 }}
            />
          )}
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="star"
          size={20}
          style={{ marginLeft: 20 }}
        />
        <Text style={{ marginLeft: 5 }}>{court.rating}</Text>
      </View>
    </View>
  );
}
