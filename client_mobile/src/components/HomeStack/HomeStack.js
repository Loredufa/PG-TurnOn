import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home/Home";
import Courts from "../Courts/Courts";
import CourtDetail from "../CourtDetail/CourtDetail";
import Suppliers from "../Suppliers/Suppliers";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Courts" component={Courts} /> 
      <Stack.Screen name="CourtDetail" component={CourtDetail} /> 
      <Stack.Screen name= "Suppliers" component = {Suppliers} />
    </Stack.Navigator>
  );
}
