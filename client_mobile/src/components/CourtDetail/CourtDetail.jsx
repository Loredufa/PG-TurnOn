import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

export default function CourtDetail({ route }) {
  return (
    <View>
      <Text>{route.params.court.name}</Text>
    </View>
  );
}
