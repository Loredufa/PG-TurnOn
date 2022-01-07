import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
//import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { getCourt } from "../../store/actions/index";

const sports = [
  { key: "Futbol", img: require("../../../Images/Football.jpg") },
  { key: "Golf", img: require("../../../Images/Golf.jpg") },
  { key: "Hockey", img: require("../../../Images/Hockey.jpg") },
  { key: "Paddle", img: require("../../../Images/Paddle.jpg") },
  { key: "Tennis", img: require("../../../Images/Tennis.jpg") },
  { key: "Otros", img: require("../../../Images/Otros.jpg") },
];

const screenWidth = Dimensions.get("window").width;
const numColumns = 6;
const titleSize = screenWidth / numColumns;

export default function Home() {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.containerSearch}>
          <TextInput
            placeholder="Nombre"
            name="name"
            style={styles.input}
            onChangeText={(court) => setInput(court)}
            defaultValue={input.name}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(getCourt(input))}
          >
            <MaterialCommunityIcons name="search" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={sports}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Courts", { name: item.key })
                }
              >
                <Text>{item.key}</Text>
                <Image
                  source={item.img}
                  style={{ height: titleSize, width: titleSize, padding: 3 }}
                />
              </TouchableOpacity>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          numColumns={3}
          key={3}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: screenWidth,
    flexDirection: "column",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,

    //borderColor: "black",
  },
  input: {
    width: 280,
    height: 40,

    marginTop: 15,

    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: "white",

    paddingLeft: 10,
  },
  containerSearch: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  button: {},
  icon: { fontSize: 15 },
});
