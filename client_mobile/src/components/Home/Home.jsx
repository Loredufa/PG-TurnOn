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
  getFavorites,
} from "../../store/actions/index";
import SearchBar from "../SearchBar/SearchBar";
import { styles } from "./StyleHome";
import { sports } from "./sports";

/*
const screenWidth = Dimensions.get("window").width;
const numColumns = 6;
const titleSize = screenWidth / numColumns;
*/

export default function Home() {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  //const [dimension, setDimension] = useState({ screenWidth, titleSize });
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  /*
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ screenWidth, titleSize }) => {
        setDimension({ screenWidth, titleSize });
      }
    );
    return () => subscription?.remove();
  });
*/

  useEffect(() => {
    //alert("Permitir acceder a tu ubicacion");
    dispatch(bestCourtsNearMe(5));
    dispatch(getFavorites(user.user.id));
  }, []);

  const courts = useSelector((state) => state.bestCourts);
  const bestSuppliers = useSelector((state) => state.supplierByLocation);
  //console.log("CANCHAS CERCAS", bestSuppliers);
  const { user } = useSelector((state) => state);
  const screenWidth = useSelector((state) => state.screenWidth);
  const titleSize = useSelector((state) => state.titleSize);
  //if (courts.length !== 0) setLoading(false);

  function submit(type) {
    //dispatch(getCourtType(type));

    navigation.navigate("Suppliers", {
      sport: type /*, dimension: dimension */,
    });
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.globalContainer}> */}
      <Text style={styles.title}>Hola, {user.user.name} :)</Text>
      <View style={styles.searchBarPos}>
        <SearchBar />
      </View>
      <View style={{ flex: 6, alignItems: "center" }}>
        <View
          style={{
            width: screenWidth,
            flex: 4,
            justifyContent: "center",
          }}
        >
          <FlatList
            data={sports}
            style={{ flex: 2 }}
            scrollEnabled={false}
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
                  <Text style={styles.sport}>{item.key}</Text>
                  <Image
                    source={{ uri: item.url }}
                    style={{
                      height: screenWidth / 4,
                      width: titleSize + 30,
                      padding: 3,
                      paddingTop: 10,
                      resizeMode: "contain",
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
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <Text
              style={{
                flex: 0.5,
                height: screenWidth / 8,
                textAlign: "left",
                //justifyContent: "center",
                justifyContent: "flex-start",
                marginLeft: 25,
                fontSize: 22,
                fontWeight: "bold",
                //marginTop: 15,
              }}
            >
              Los mejores de tu zona
            </Text>
            {bestSuppliers.length === 0 ? (
              <ActivityIndicator
                style={{ flex: 2.8 }}
                size="large"
                color="#00ff00"
              />
            ) : (
              <FlatList
                data={bestSuppliers}
                pagingEnabled={true}
                style={{
                  flexGrow: 2.8,
                  width: screenWidth,
                  height: screenWidth / 4,
                  marginLeft: 20,
                  marginBottom: 10,
                }}
                contentContainerStyle={{ alignItems: "center" }}
                horizontal
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Courts", {
                        name: item.name,
                        id: item.id,
                        coordinates: item.coordinates,
                        sport: "Tu busqueda",
                      })
                    }
                  >
                    <View
                      style={[
                        styles.card2,
                        {
                          height: (3 * screenWidth) / 6,
                          width: (2.5 * screenWidth) / 4,
                        },
                      ]}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          height: (2.5 * screenWidth) / 6,
                          width: (2.5 * screenWidth) / 4 - 2,
                          //padding: 3,
                          borderTopLeftRadius: 25,
                          borderTopRightRadius: 25,
                          resizeMode: "stretch",
                        }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          width: (2.5 * screenWidth) / 4 - 2,
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.supplier}>{item.name}</Text>
                        <View style={styles.ratingContainer}>
                          <MaterialCommunityIcons
                            name="star"
                            size={15}
                            color="#FFC900"
                          />
                          <Text>{item.reputation.toFixed(1)}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                //numColumns={3}
                keyExtractor={(item) => item.id}
              />
            )}
          </View>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
}
