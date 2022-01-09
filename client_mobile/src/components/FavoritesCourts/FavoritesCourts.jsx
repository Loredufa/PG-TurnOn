import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useSelector } from "react-redux";

export default function FavoritesCourts() {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  return (
    <View>
      <Text>Mis canchas</Text>
      {favorites.length !== 0 ? (
        <Text>{favorites[0].name}</Text>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
