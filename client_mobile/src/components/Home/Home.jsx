import React, { useState, useEffect } from "react";
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
  ActivityIndicator,
} from "react-native";
//import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import {
  getCourt,
  bestCourtsNearMe,
  getCourtType,
} from "../../store/actions/index";

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
  const [dimension, setDimension] = useState({ screenWidth, titleSize });
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ screenWidth, titleSize }) => {
        setDimension({ screenWidth, titleSize });
      }
    );
    return () => subscription?.remove();
  });

  useEffect(() => {
    //alert("Permitir acceder a tu ubicacion");
    dispatch(bestCourtsNearMe(5));
  }, []);

  const courts = useSelector((state) => state.bestCourts);
  //if (courts.length !== 0) setLoading(false);

  function submit(type) {
    dispatch(getCourtType(type));
    navigation.navigate("Courts", { dimension: dimension });
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.globalContainer}> */}
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
          <MaterialCommunityIcons name="search" size={25} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: dimension.screenWidth,
          flex: 3,
          justifyContent: "center",
        }}
      >
        <FlatList
          data={sports}
          style={{ marginTop: 10 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => submit(item.key)}
                /*
                onPress={() =>
                  navigation.navigate("Courts", { name: item.key })
                }
                */
              >
                <Text>{item.key}</Text>
                <Image
                  source={item.img}
                  style={{
                    height: dimension.screenWidth / 4,
                    width: dimension.titleSize,
                    padding: 3,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          numColumns={3}
          key={3}
        />
      </View>
      <View style={styles.review}>
        {courts.length === 0 ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ flex: 0.5, height: dimension.screenWidth / 8 }}>
              Los mejores de tu zona
            </Text>
            <FlatList
              data={courts}
              pagingEnabled={true}
              style={{
                flexGrow: 1.5,
                width: dimension.screenWidth,
                height: dimension.screenWidth / 4,
              }}
              contentContainerStyle={{ alignItems: "center" }}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CourtDetail", { court: item })
                  }
                >
                  <View style={styles.card}>
                    <Text>{item.name}</Text>
                    <Image
                      source={item.img}
                      style={{
                        height: dimension.screenWidth / 4,
                        width: dimension.screenWidth / 2,
                        padding: 3,
                      }}
                    />
                    <Text>{item.rating}</Text>
                  </View>
                </TouchableOpacity>
              )}
              //ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              //numColumns={3}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "column",
  },
  /*
  inputContainer: {
    width: screenWidth,
    flex: 2,
  },
  */
  globalContainer: {
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
    flex: 1,
  },
  button: {},
  //icon: { fontSize: 15 },
  review: {
    flex: 2,
    justifyContent: "flex-start",
  },
});
