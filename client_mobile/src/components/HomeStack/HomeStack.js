import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Home from '../Home/Home'
import Courts from "../Courts/Courts";


const Stack = createStackNavigator();

export default function App() {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Courts" component={Courts} />
        </Stack.Navigator>
  );
}