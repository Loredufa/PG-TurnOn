import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import User from "../User/User";
import FavoritesCourts from "../FavoritesCourts/FavoritesCourts";
import Bookings from "../Bookings/Bookings";
import Location from "../Location/Location";
import HomeStack from "../HomeStack/HomeStack";
import Home from "./Home";
import Courts from "../Courts/Courts";
import CourtDetail from "../CourtDetail/CourtDetail";
import StackBooking from "../StackBooking/StackBooking";
import StackFavorites from "../StackFavorites/StackFavorites";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        activeTintColor: "#179F34",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => (
            <MaterialCommunityIcons
              name={color === "#179F34" ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reservas"
        component={StackBooking}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => (
            <MaterialCommunityIcons
              name={color === "#179F34" ? "reader" : "reader-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={StackFavorites}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => (
            <MaterialCommunityIcons
              name={color === "#179F34" ? "heart" : "heart-outline"}
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
              name={color === "#179F34" ? "person" : "person-outline"}
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
              name={color === "#179F34" ? "location" : "location-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
