import React, { useEffect } from "react";
import {
  Text,
  View,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Court from "../Court/Court";
import {styles} from './StyleBookings';
import {getBookings} from '../../store/actions/index';

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
      {bookings.length !== 0 ? (
        <View
        style={{
          flex: 6,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        >
        <FlatList
          data={bookings}
          style={{ flexGrow: 5.5 }}
          contentContainerStyle={{ alignItems: "center" }}
          renderItem={({ item }) => (
            //<Court item={item} />
            <Text>{item.courtId}</Text>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            //numColumns={3}
            keyExtractor={(item) => item.id}
        />
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}




