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
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import SearchBar from "../SearchBar/SearchBar";
import {styles} from './StylesSuppliers';
import Court from '../Court/Court'
import {useDispatch, useSelector} from 'react-redux'
import { getSupplierBySport } from "../../store/actions";
import Supplier from "../Supplier/Supplier";

export default function Suppliers({ route }) {
  //const navigation = useNavigation();
  //const courts = useSelector((state) => state.courtTypes);
  const {screenWidth , suppliers} = useSelector ((state) => state)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getSupplierBySport(route.params.sport));
  },[])


  return (
    <View style={styles.container}>
      <View style={styles.searchBarPos}>
        <SearchBar />
      </View>
      <View style={{flex:4}}>
      <Text
            style={styles.title}
          >
            {route.params.sport}
          </Text>
      {suppliers.length === 0 ? (
        <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <View
          style={{
            flex: 6,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          >
          <FlatList
            data={suppliers}
            style={{ flexGrow: 5.5 , width: screenWidth }}
            contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <Supplier item={item} sport={route.params.sport}/>
              )}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              //numColumns={3}
              keyExtractor={(item) => item.id}
              />
        </View>
      )}
      </View>
    </View>
  );
}
