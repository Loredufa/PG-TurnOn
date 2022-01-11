import React from "react";
import {
  Text,
  View,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Court from "../Court/Court";
import {styles} from './StyleBookings';

export default function Bookings({ route }) {
  const {bookings } = useSelector((state) => state);
  
  return (
    <View style={styles.container}>
      <View style={styles.searchBarPos}>
        <SearchBar />
      </View>
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
            <Court item={item} />
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




