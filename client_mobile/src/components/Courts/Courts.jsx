import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Home from "../Home/HomeTab";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import {
  addToFavorite,
  getCourt,
  getCourtBySportSupplier,
  getCourtsBySupplier,
} from "../../store/actions/index";
import SearchBar from "../SearchBar/SearchBar";
import Court from "../Court/Court";
import { styles } from "./StyleCourts";

export default function Courts({ route }) {
  //const navigation = useNavigation();
  //const courts = useSelector((state) => state.courtTypes);
  const { courtsBySports } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params.sport !=="Tu busqueda" && route.params.sport !=="Favoritos" )
    {

      console.log(route.params.sport)
      dispatch(getCourtBySportSupplier(route.params.name, route.params.sport));
    }
    else dispatch(getCourtsBySupplier(route.params.name));
  }, []);

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {route.params.name}</Text>
      {/*<View style={styles.searchBarPos}>
        <SearchBar />
      </View>*/}
      {courtsBySports.length === 0? /*&&
      (route.params.sport && courtsBySports[0].sport !== route.params.sport) ?*/ (
        <ActivityIndicator
          size="large"
          color="#00ff00"
          style={{ flex: 5, justifyContent: "center" }}
        />
      ) : (
        <View
          style={{
            flex: 5,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <FlatList
            data={courtsBySports}
            style={{ flexGrow: 5.5 }}
            //contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <Court
                item={item}
                supplierID={route.params.id}
                coordinates={route.params.coordinates}
              />
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
