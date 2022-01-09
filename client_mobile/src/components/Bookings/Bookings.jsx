import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { addToFavorite, getCourt } from "../../store/actions/index";

export default function Bookings({ route }) {
  const {bookings , favorites} = useSelector((state) => state);
  console.log("Reservas:" , bookings);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const screenWidth = Dimensions.get("window").width;
  const numColumns = 6;
  const titleSize = screenWidth / numColumns;


  const [dimension, setDimension] = useState({ screenWidth , titleSize });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ screenWidth, titleSize }) => {
        setDimension({ screenWidth, titleSize });
      }
    );
    return () => subscription?.remove();
  });

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
      {bookings.length !== 0 ? (
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
          Reservas
        </Text>
        <FlatList
          data={bookings}
          style={{ flexGrow: 5.5 }}
          contentContainerStyle={{ alignItems: "center" }}
          renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CourtDetail", { court: item })
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
                    height: dimension.screenWidth / 2,
                    width: dimension.screenWidth / 1.1,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{
                      height: dimension.screenWidth / 4,
                      width: dimension.screenWidth / 4,
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
      ) : (
        <Text></Text>
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

