import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {styles} from './StylesBookingDetail'

export default function BookingDetail({route}) {
    const {screenWidth} = useSelector(state => state);
    const navigation = useNavigation();
    const {booking} = route.params;
  return (
    <View style={{ justifyContent: "center", flex: 1 }}> 
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{booking.court.name}</Text>
        {/*<MaterialCommunityIcons
          name="close-circle-outline"
          size={25}
          color={"black"}
          style={{ marginLeft: 10, marginRight: 20 }}
        />*/}
      </View>
                  <Image
                    source={{uri: "https://images.vexels.com/media/users/3/132448/isolated/preview/baf01fb517749ccf4e1215d7576fe262-pelota-de-tenis.png"}}
                    style={{
                      flex: 3,
                      //height: screenWidth / 3,
                      width: screenWidth / 1.6,
                      padding: 3,
                      borderRadius: 10,
                    }}
                    />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>{booking.court.description}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                      <Text style={styles.date}>{booking.booking.date}</Text>
                      <Text style={styles.hour}>{booking.booking.endingTime} - {booking.booking.initialTime}</Text>
                    </View>
                    <View style={styles.phoneAndLocationContainer}>
                      <Text style={styles.phone}>Teléfono: {booking.court.phone}</Text>
                      <TouchableOpacity
                      style={styles.location}
                      onPress={() =>
                        navigation.navigate("Ubicacion", {
                          courtLocation: [
                            {
                              latitude: parseFloat(coordinates[0]),
                              longitude: parseFloat(coordinates[1]),
                              title: court.name,
                              description: court.description,
                              id: 1,
                            },
                          ],
                        })
                      }
                      >
                        <Text style={styles.map}>Ver en el Mapa</Text>
                        <MaterialCommunityIcons
                          name={"location"}
                          color={"#E64E39"}
                          size={30}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.codigoContainer}>
                      <Text style={styles.textCod}>Código de reserva: </Text>
                      <Text style={styles.numCod}>{booking.booking.bookingCode}</Text>
                    </View>
                    <View style={styles.buttons}>
                      <TouchableOpacity style={styles.btnEdit}>
                        <Text style={styles.buttonText}>Editar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnCancel}>
                        <Text style={styles.textCancel}>Cancelar</Text>
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
  );
}