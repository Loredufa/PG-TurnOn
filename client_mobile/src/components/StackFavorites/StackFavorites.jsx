import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Bookings from "../Bookings/Bookings";
import BookingDetail from "../BookingDetail/BookingDetail";
import Message from "../Message/Message";
import FavoritesCourts from "../FavoritesCourts/FavoritesCourts";
import CourtDetail from "../CourtDetail/CourtDetail";
import Courts from "../Courts/Courts";

const Stack = createStackNavigator();

export default function StackFavorites() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorites" component={FavoritesCourts} />
      <Stack.Screen name="Courts" component={Courts} />
      <Stack.Screen name="CourtDetail" component={CourtDetail} />
    </Stack.Navigator>
  );
}