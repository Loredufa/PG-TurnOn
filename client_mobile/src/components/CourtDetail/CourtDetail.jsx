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
import { useDispatch } from "react-redux";
import { addToFavorite, bookCourt } from "../../store/actions/index";

export default function CourtDetail({ route }) {
  const dispatch = useDispatch();

  function handlerBooking(court) {
    dispatch(bookCourt(court));
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={{ marginRight: 20 }}>{route.params.court.name}</Text>
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={25}
          color={"black"}
          style={{ marginLeft: 10, marginRight: 20 }}
        />
      </View>
      <Image
        source={route.params.court.img}
        style={{
          flex: 2,
          height: route.params.dimension / 6,
          width: route.params.dimension / 2,
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
      <TouchableOpacity onPress={handlerBooking(route.params.court)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Reservar</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          padding: 3,
        }}
      >
        <TouchableOpacity
          onPress={() => dispatch(addToFavorite(route.params.court))}
        >
          <MaterialCommunityIcons
            name="heart-outline"
            size={25}
            color={"black"}
            style={{ marginLeft: 10, marginRight: 20 }}
          />
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="star"
          size={20}
          style={{ marginLeft: 20 }}
        />
        <Text style={{ marginLeft: 5 }}>{route.params.court.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
  },
  optionsContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
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
});
