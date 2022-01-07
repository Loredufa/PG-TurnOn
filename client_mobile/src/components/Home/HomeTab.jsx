import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import User from "../User/User";
import FavoritesCourts from "../FavoritesCourts/FavoritesCourts";
import Bookings from "../Bookings/Bookings";
import Location from "../Location/Location";
import Home from "./Home";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
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
        name="FavoritesCourts"
        component={FavoritesCourts}
        options={{
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
        name="User"
        component={User}
        options={{
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
        name="Location"
        component={Location}
        options={{
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
