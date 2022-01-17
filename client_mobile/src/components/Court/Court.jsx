import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../Home/HomeTab";
import User from "../User/User";
import { styles } from "./StyleCourt";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { addToFavorite } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Court({ item, supplierID }) {
  const { screenWidth, favorites } = useSelector((state) => state);
  console.log(favorites);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CourtDetail", {
          court: item,
          dimension: screenWidth,
          supplierID: supplierID,
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
          // height: screenWidth / 3,
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
            uri: "https://images.vexels.com/media/users/3/132448/isolated/preview/baf01fb517749ccf4e1215d7576fe262-pelota-de-tenis.png",
          }}
          style={{
            // height: screenWidth / 4,
            // width: screenWidth / 4,
            height: "90%",
            width: "40%",
            padding: 3,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            //alignItems: "center",
          }}
        >
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.date}>
            <Text style={styles.text}>Lun - Dom</Text>
            <Text style={styles.text}>Horario: 16 a 23 hs</Text>
          </View>
          <View style={styles.ref}>
            <Text>Precio: {item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
