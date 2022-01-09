import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from "react-native";
import Home from "../Home/HomeTab";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { addToFavorite, getCourt } from "../../store/actions/index";

export default function Courts({ route }) {
  //const navigation = useNavigation();
  const courts = useSelector((state) => state.courtTypes);
  const {favorites} = useSelector(state => state)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  /*
  const [btnPress, setBtnPress] = useState({ press: false, color: "black" });

  function press(data) {
    dispatch(addToFavorite(data))
    if(btnPress.color==="black")
    setBtnPress({press: true, color:"red"})
    else setBtnPress({press: true, color:"black"})
  }
  */
  return (
    <View style={styles.container}>
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
      {courts.length === 0 ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View
          style={{
            flex: 6,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {courts[0].type}
          </Text>
          <FlatList
            data={courts}
            style={{ flexGrow: 5.5 }}
            contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CourtDetail", {
                    court: item,
                    dimension: route.params.dimension.screenWidth,
                  })
                }
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    borderRadius: 10,
                    margin: 10,
                    borderWidth: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    height: route.params.dimension.screenWidth / 2,
                    width: route.params.dimension.screenWidth / 1.1,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{
                      height: route.params.dimension.screenWidth / 4,
                      width: route.params.dimension.screenWidth / 4,
                      padding: 3,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text>{item.name}</Text>
                    <Text>Precio: {item.price}</Text>
                    <Text>Horario: {item.timeTables}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-start",
                        padding: 3,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => dispatch(addToFavorite(item))}
                      >
                        <MaterialCommunityIcons
                          name="heart-outline"
                          size={25}
                          color={favorites.find(element => element.name === item.name)?"red":"black"}
                          style={{ marginLeft: 10, marginRight: 20 }}
                        />
                      </TouchableOpacity>
                      <MaterialCommunityIcons
                        name="star"
                        size={20}
                        style={{ marginLeft: 20 }}
                      />
                      <Text style={{ marginLeft: 5 }}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            //numColumns={3}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  /*
  home: {
    marginTop: 30,

    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
  },
  */
  containerSearch: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
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
  /*
  card: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,

    //borderColor: "black",
  },
  */
});
