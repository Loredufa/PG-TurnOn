import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home/Home";
import Courts from "../Courts/Courts";
import CourtDetail from "../CourtDetail/CourtDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Courts" component={Courts} />
      <Stack.Screen name="CourtDetail" component={CourtDetail} />
    </Stack.Navigator>
  );
}
