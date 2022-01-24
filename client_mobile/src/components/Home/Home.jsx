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

const sports = [
  {
    key: "Futbol",
    img: require("../../../Images/Football.jpg"),
    url: "https://i.pinimg.com/originals/37/ee/9e/37ee9e13208a4b3a3cb3c49ae7d4338c.png",
  },
  {
    key: "Golf",
    img: require("../../../Images/Golf.jpg"),
    url: "https://2.bp.blogspot.com/-ZIMcXanor7I/WZhBGNfOLAI/AAAAAAAHVTA/mEfwzM42yX4RwpS6CwumQ0ZhHsou1m9EwCLcBGAs/s1600/Golf-Ball-PNG-Clipart.png",
  },
  {
    key: "Hockey",
    img: require("../../../Images/Hockey.jpg"),
    url: "https://images.vexels.com/media/users/3/227283/isolated/preview/90710bdb5ce01b6d75b9bc710c116f3c-palos-de-hockey-azul-y-verde-planos.png",
  },
  {
    key: "Paddle",
    img: require("../../../Images/Paddle.jpg"),
    url: "https://cdn-icons-png.flaticon.com/512/434/434062.png",
  },
  {
    key: "Tenis",
    img: require("../../../Images/Tennis.jpg"),
    url: "https://images.vexels.com/media/users/3/132448/isolated/preview/baf01fb517749ccf4e1215d7576fe262-pelota-de-tenis.png",
  },
  {
    key: "Otros",
    img: require("../../../Images/Otros.jpg"),
    url: "https://images-na.ssl-images-amazon.com/images/I/61poZwdANWL.png",
  },
];

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
  console.log("CANCHAS CERCAS", bestSuppliers);
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
      <View style={{ flex: 5, alignItems: "center" }}>
        <View
          style={{
            width: screenWidth,
            flex: 3,
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
                      width: titleSize + 10,
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
          <View style={{ flex: 2 }}>
            <Text
              style={{
                flex: 1,
                height: screenWidth / 8,
                textAlign: "left",
                justifyContent: "center",
                marginLeft: 20,
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              Los mejores de tu zona
            </Text>
            {bestSuppliers.length === 0 ? (
              <ActivityIndicator
                style={{ flex: 1 }}
                size="large"
                color="#00ff00"
              />
            ) : (
              <FlatList
                data={bestSuppliers}
                pagingEnabled={true}
                style={{
                  flexGrow: 1.5,
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
                      style={
                        (styles.card2,
                        {
                          height: (2 * screenWidth) / 6,
                          width: (3 * screenWidth) / 4,
                          borderWidth: 1,
                          borderRadius: 25,
                        })
                      }
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          height: (1.5 * screenWidth) / 6,
                          width: (3 * screenWidth) / 4 - 2,
                          //padding: 3,
                          borderTopLeftRadius: 25,
                          borderTopRightRadius: 25,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          width: (3 * screenWidth) / 4 - 2,
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
