import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Bookings from "../Bookings/Bookings";
import BookingDetail from "../BookingDetail/BookingDetail";
import Message from "../Message/Message";
import EditBooking from "../EditBooking/EditBooking";

const Stack = createStackNavigator();

export default function StackBooking() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bookings" component={Bookings} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name= "EditBooking" component={EditBooking} />
    </Stack.Navigator>
  );
}