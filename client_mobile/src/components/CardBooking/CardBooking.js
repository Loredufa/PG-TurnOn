import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {styles} from './StylesCardBooking';
import { images } from '../Supplier/Supplier'

export default function CardBooking({item}) {
    const {screenWidth} = useSelector(state => state);
    const navigation = useNavigation();
  return (
    <TouchableOpacity
                onPress={() =>
                  navigation.navigate("BookingDetail", {
                    booking: item,
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
                    source={{
                      uri: item.court?.image? item.court?.image : images[item.court.sport]
                    }}
                    style={{
                      height: '90%',
                      width: '35%',
                      padding: 3,
                      borderRadius: 10,
                      alignItems: 'center',
                      marginLeft: 5
                    }}
                  />
                  <View
                    style={styles.info}
                  >
                    <Text style={styles.name}>{item.court.name}</Text>
                    <View style={styles.date}>
                    <Text style={styles.text}>{item.booking.date}</Text>
                    <Text style={styles.text}>{item.booking.initialTime}-{item.booking.endingTime}</Text>
                    </View>
                    <View style={styles.ref}>
                    <Text style={styles.text}>{item.court.price}</Text>
                    <Text style={styles.text}>Código: {item.booking.bookingCode}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
  );
}