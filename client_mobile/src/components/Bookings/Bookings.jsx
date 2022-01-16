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
  const {bookings , user} = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBookings(user.user.id));
  },[])

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
        {bookings.length !== 0 ? (
        <FlatList
          data={bookings}
          style={{ flexGrow: 5.5 }}
          contentContainerStyle={{ alignItems: "center" }}
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




