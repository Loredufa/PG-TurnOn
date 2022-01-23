import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {styles} from './StylesBookingDetail'
import {deleteBooking , changeBooking , bookCourt} from '../../store/actions/index';
import Message from '../Message/Message';
import { images } from '../Supplier/Supplier'
import EditBooking from "../EditBooking/EditBooking";

export default function BookingDetail({route}) {
    const {screenWidth , messageBack , flagBooking , user} = useSelector(state => state);
    const navigation = useNavigation();
    const {booking} = route.params;
    const dispatch = useDispatch();
    //let [coordinates , setCoordinates] = useState(booking.court.address.split(" "))
    let [eliminar , setEliminar] = useState(false)
    function handlerDelete() {
      //dispatch(deleteBooking(booking.booking.id));
      /*
      var now = new Date();
      var day = ("0" + now.getDate()).slice(-2);
      var month = ("0" + (now.getMonth() + 1)).slice(-2);
      var today = day + "-" + month + "-" + now.getFullYear();
      //var today = now.getFullYear() + "-" + (month) + "-" + (day);
      // console.log("La fecha de hoy" , today)
      setDate(today);
      let dateArr = today.split("-");
      var d = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
      d = d.getDay();
      var daysOfWeek = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ];
      let day1 = daysOfWeek[d];
      */
      //UN DIA EN MILI SEGUNDOS 86400000
      dispatch(changeBooking(
        booking.booking.id , 
        booking.booking.date , 
        `${booking.booking.initialTime}-${booking.booking.endingTime}`,
        'canceled'
      ));
      
      dispatch(bookCourt(
        booking.court.id,
        user.user.id,
        'Lunes',
        '00/00/0000',
        '0000',
        '00:00-00:00',
        booking.court.supplierId,
        ));
      navigation.navigate("Bookings")
      setEliminar(false)
    }
    let [editBooking , setEditBooking] = useState(false);

    function handlerEditBooking () {
      setEditBooking(true);
    }

    function handlerChangeBooking (bookingId , date , timeSelected) {
      dispatch(changeBooking(bookingId , date , timeSelected))
      setEditBooking(false);
      navigation.navigate("Bookings")
  }
  useEffect(()=> {

  }, [flagBooking])

  return (
    messageBack?
    <Message />
    :
    eliminar? 
    <View style={{ flex: 1, alignItems: "center" , justifyContent: 'center' }}>
      <Text style={styles.question}>¿Esta seguro que quiere cancelar la reserva?</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnEdit} onPress={()=>setEliminar(false)}>
            <Text style={styles.buttonText}>No eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancel} onPress={handlerDelete}>
            <Text style={styles.textCancel}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
    :
    <View style={{ justifyContent: "center", flex: 1 }}> 
    <EditBooking 
    booking = {booking}
    visible={editBooking}
    onClose={() => setEditBooking(false)}
    onEdit = {handlerChangeBooking}
    />
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
                    source={{
                      uri: booking.court.image? booking.court.image : images[booking.court.sport]
                    }}
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
                      <Text style={styles.hour}>{booking.booking.initialTime}-{booking.booking.endingTime}</Text>
                    </View>
                    <View style={styles.phoneAndLocationContainer}>
                      <Text style={styles.phone}>Teléfono: {booking.court.phone}</Text>
                      {/*<TouchableOpacity
                      style={styles.location}
                      onPress={() =>
                        navigation.navigate("Ubicacion", {
                          courtLocation: [
                            {
                              latitude: parseFloat(coordinates[0]),
                              longitude: parseFloat(coordinates[1]),
                              title: booking.court.name,
                              description: booking.court.description,
                              id: 1,
                            },
                          ],
                        })
                      }
                    >*
                        <Text style={styles.map}>Ver en el Mapa</Text>
                        <MaterialCommunityIcons
                          name={"location"}
                          color={"#E64E39"}
                          size={30}
                        />
                    </TouchableOpacity> */}
                    </View>
                    <View style={styles.codigoContainer}>
                      <Text style={styles.textCod}>Código de reserva: </Text>
                      <Text style={styles.numCod}>{booking.booking.bookingCode}</Text>
                    </View>
                    <View style={styles.buttons}>
                      <TouchableOpacity style={styles.btnEdit} onPress={handlerEditBooking}>
                        <Text style={styles.buttonText}>Editar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnCancel} onPress={() => setEliminar(true)}>
                        <Text style={styles.textCancel}>Eliminar</Text>
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
  );
}