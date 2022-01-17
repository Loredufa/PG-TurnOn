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
import {styles} from './StylesSupplier';
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { addToFavorite } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Supplier({item , sport}) {
    const {screenWidth , favorites , user} = useSelector(state => state);
    console.log(favorites);
    const navigation = useNavigation();
    const dispatch = useDispatch();
  return (
    <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Courts", {
                    name: item.name, //No se si son necesarios
                    sport: sport,
                    id: item.id,    //No se si son necesarios
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
                    borderColor: '#3FC959',
                    //backgroundColor: '#F8F1D9'
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    height: screenWidth / 3,
                    width: screenWidth / 1.1,

                    backgroundColor: 'white',
                    shadowOpacity: 0.50,
                    shadowRadius: 5,
                    shadowColor: "#000",
                    elevation: 20,
                  }}
                >
                  <Image
                    source={{uri: "https://images.vexels.com/media/users/3/132448/isolated/preview/baf01fb517749ccf4e1215d7576fe262-pelota-de-tenis.png"}}
                    style={styles.img}
                  />
                  <View
                    style={styles.info}
                  >
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.mail}>{item.mail}</Text>
                    <View
                      style={{
                        flex:1,
                        flexDirection: "row",
                        alignItems: 'stretch',
                        justifyContent: 'space-evenly',
                        padding: 3,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => dispatch(addToFavorite(item/*item.id , user.user.id*/))}
                      >
                        {favorites?.find(element => element.name === item.name)?
                        <MaterialCommunityIcons
                        name="heart"
                        size={25}
                        color= 'red'
                        />:
                        <MaterialCommunityIcons
                        name="heart-outline"
                        size={25}
                        color= 'black'
                        />
                      }
                      </TouchableOpacity>
                      <View style={styles.containerRating}>
                      <MaterialCommunityIcons
                        name="star"
                        size={20}
                        color = '#FFC900'
                        />
                      <Text style={styles.rating}>{/*item.rating*/}5</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
  );
}