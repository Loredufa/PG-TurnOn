import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../Home/HomeTab";
import User from "../User/User";
import {styles} from './StyleCourt';
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { addToFavorite } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Court({item}) {
    const {screenWidth , favorites} = useSelector(state => state);
    console.log(favorites);
    const navigation = useNavigation();
    const dispatch = useDispatch();
  return (
    <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CourtDetail", {
                    court: item,
                    dimension: screenWidth,
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
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    height: screenWidth / 2,
                    width: screenWidth / 1.1,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{
                      height: screenWidth / 4,
                      width: screenWidth / 4,
                      padding: 3,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text>{item.name}</Text>
                    <Text>Precio: {item.price}</Text>
                    <Text>Horario: {item.timeTables}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-start",
                        padding: 3,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => dispatch(addToFavorite(item))}
                      >
                        <MaterialCommunityIcons
                          name="heart-outline"
                          size={25}
                          color={favorites?.find(element => element.name === item.name)?"red":"black"}
                          style={{ marginLeft: 10, marginRight: 20 }}
                        />
                      </TouchableOpacity>
                      <MaterialCommunityIcons
                        name="star"
                        size={20}
                        style={{ marginLeft: 20 }}
                      />
                      <Text style={{ marginLeft: 5 }}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
  );
}