import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import User from "../User/User";
import FavoritesCourts from "../FavoritesCourts/FavoritesCourts";
import Bookings from "../Bookings/Bookings";
import Location from "../Location/Location";
import HomeStack from "../HomeStack/HomeStack";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Reservas"
        component={Bookings}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => (
            <MaterialCommunityIcons
              name="reader-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoritesCourts}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={User}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => (
            <MaterialCommunityIcons
              name="person-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ubicacion"
        component={Location}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => (
            <MaterialCommunityIcons
              name="location-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
