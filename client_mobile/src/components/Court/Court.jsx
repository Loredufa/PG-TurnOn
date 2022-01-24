import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../Home/HomeTab";
import User from "../User/User";
import { styles } from "./StyleCourt";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { addToFavorite } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../Supplier/Supplier";

export default function Court({ item, supplierID, coordinates }) {
  const { screenWidth, favorites } = useSelector((state) => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CourtDetail", {
          court: item,
          dimension: screenWidth,
          supplierID: supplierID,
          coordinates: coordinates,
        })
      }
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderRadius: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: "#3FC959",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          height: screenWidth / 3,
          width: screenWidth / 1.1,
          backgroundColor: "white",
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowColor: "#000",
          elevation: 20,
        }}
      >
        <Image
          source={{
            uri: item.image ? item.image : images[item.sport],
          }}
          style={{
            // height: screenWidth / 4,
            // width: screenWidth / 4,
            height: "90%",
            width: "35%",
            padding: 3,
            borderRadius: 10,
            marginLeft: 5
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginLeft: 5
          }}
        >
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.date}>
            <Text style={styles.text}>{item.description}</Text>
            {/*<Text style={styles.text}>Horario: 16 a 23 hs</Text>*/}
          </View>
          <View style={styles.ref}>
            <Text>Precio: {item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
