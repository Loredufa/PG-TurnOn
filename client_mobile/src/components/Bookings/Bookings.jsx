import React, { useEffect } from "react";
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
import {getBookings} from '../../store/actions/index';
import CardBooking from "../CardBooking/CardBooking";

export default function Bookings({ route }) {
  let {bookings , user , flagBooking} = useSelector((state) => state);
  /*bookings =  [
        {
            "booking": {
                "id": 2,
                "courtId": "2",
                "userId": "1",
                "date": "01/02/03",
                "day": "Lunes",
                "initialTime": "13:00",
                "endingTime": "14:00",
                "bookingCode": "1231",
                "status": "active",
                "createdAt": "2022-01-15T22:26:07.715Z",
                "updatedAt": "2022-01-15T22:26:07.715Z",
                "availableId": null
            },
            "court": {
                "id": 2,
                "name": "Los metecos",
                "address": "asdasdds",
                "city": null,
                "state": null,
                "postcode": null,
                "phone": "166546466",
                "mail": null,
                "password": null,
                "sport": "asdasd",
                "price": "3213",
                "image": "asdasd",
                "coordinates": null,
                "comments": null,
                "reputation": null,
                "description": "asdasdsa",
                "createdAt": "2022-01-15T22:24:19.266Z",
                "updatedAt": "2022-01-15T22:24:19.266Z",
                "supplierId": 1
            }
        }
    ]*/
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBookings(user.user.id));
  },[flagBooking])
  console.log(bookings)
  return (
    <View style={styles.container}>
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




