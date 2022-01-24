import React, { useEffect , useState } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Court from "../Court/Court";
import {styles} from './StyleBookings';
import {getBookings , getCompletedBookings, rateSupplier , changeBookingRated} from '../../store/actions/index';
import CardBooking from "../CardBooking/CardBooking";
import RatingBooking from "../RatingBooking/RatingBooking";
import Message from "../Message/Message";

export default function Bookings({ route }) {
  let {bookings , completedBookings , user , flagBooking , messageBack} = useSelector((state) => state);
  //console.log("LAS BOOKINGS" , bookings)
  const dispatch = useDispatch();
  
  let [rateBooking , setRateBooking] = useState(false);
  //let [bookingsToRate , setBookingsToRate] = useState(undefined);

  useEffect(() => {
    if (completedBookings.length > 0 && completedBookings[0]?.booking?.rated === false)
    setRateBooking(true)
    else
    setRateBooking(false)
  },[completedBookings])

  // useEffect(() => {
  //     if (Array.isArray(bookings)){
  //       // var now = new Date();
  //       // var day = ("0" + now.getDate()).slice(-2);
  //       // var month = ("0" + (now.getMonth() + 1)).slice(-2);
  //       // var today = day + "-" + month + "-" + now.getFullYear();
  //       // let dateArr = today.split("-");
  //       // var compareDate = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
  //       // let bookingsRate = bookings.find (
  //       //   (el) => {
  //       //     let date = el?.booking?.date.split('/')
  //       //     date = new Date(date[2], date[1] - 1, date[0]);
  //       //     console.log (date , compareDate)
  //       //     if (date.getTime() < compareDate.getTime()){
  //       //       /// cuando hago cancelar o confirmar cambio el estado de la variable de booking rating de todas formas
  //       //       //if(el.booking.status === 'completed') { 
  //       //         return el
  //       //       //} 
  //       //     }
  //       //   }
  //       //   )
  //       //   setBookingsToRate(bookingsRate);
  //       //   bookingsToRate !== undefined  && setRateBooking(true)
  //       //   console.log("Las bookings a hacer el rate" ,bookingsToRate);
  //       } 
  //   },[bookings])
  
  useEffect(()=>{
    dispatch(getBookings(user.user.id , true));
    dispatch(getCompletedBookings(user.user.id , true))
  },[flagBooking])
  
  function handlerRate (supplierId , rating , bookingId) {
    setRateBooking(false);
    // agregar el id court
    console.log("ACA VOY A HACER EL DISPATCH CON SupplierId= ", supplierId , "y el rating es ", rating , "id de la reserva" , bookingId)
    // aca al final tengo que pasar el id de la cancha tambien
    dispatch(rateSupplier(supplierId , rating , bookingId))
    dispatch(changeBookingRated(bookingId))
  }

  function handlerNotRate (bookingId) {
    setRateBooking(false);
    dispatch(changeBookingRated(bookingId))
  }

  return messageBack !== "" ? (
    <Message />
  ) :  (
    <View style={styles.container}>
      {rateBooking &&<RatingBooking 
      visible = {rateBooking}
      onClose={handlerNotRate}
      name = {completedBookings[0]?.court?.name}
      supplierId = {completedBookings[0]?.court?.supplierId}
      bookingId = {completedBookings[0]?.booking?.id}
      onRate = {handlerRate}
      />}
      <Text style={styles.title} >
      Reservas
      </Text>
        <View
        style={{
          flex: 5,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        >
        {bookings?.length !== 0 ? (
        <FlatList
          data={bookings}
          style={{ flexGrow: 5.5 }}
          //contentContainerStyle={{ alignItems: "center" }}
          renderItem={({ item }) => (
            //<Court item={item} />
            <CardBooking item = {item} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            //numColumns={3}
            keyExtractor={(item) => item.id}
        />
        ) : (
          <ActivityIndicator size="large" color="#00ff00" style={{flex:1 ,justifyContent: 'center'}} />
          )}
          </View>
    </View>
  );
}




