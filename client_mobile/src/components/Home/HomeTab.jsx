import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import User from "../User/User";
import FavoritesCourts from "../FavoritesCourts/FavoritesCourts";
import Bookings from "../Bookings/Bookings";
import Location from "../Location/Location";
import HomeStack from "../HomeStack/HomaStack";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } // color y size lo tomaria del tab navigator si lo configuro
          ) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Bookings"
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
        name="FavoritesCourts"
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
        name="User"
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
        name="Location"
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
