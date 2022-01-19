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
import { getFavorites, getSupplierBySport } from "../../store/actions";
import Supplier from "../Supplier/Supplier";

export default function Suppliers({ route }) {
  //const navigation = useNavigation();
  //const courts = useSelector((state) => state.courtTypes);
  const {screenWidth , suppliers , user} = useSelector ((state) => state)
  const dispatch = useDispatch();
  useEffect(()=> {
    if (route.params.sport === "Otros")
    dispatch(getSupplierBySport("others"))
    else {
      route.params.sport && dispatch(getSupplierBySport(route.params.sport));
    }
  },[])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.sport && route.params.sport}{route.params.type && route.params.type}</Text>
      <View style={styles.searchBarPos}>
        <SearchBar />
      </View>
      <View style={{flex:5}}>
      {suppliers.length === 0 ? (
        <ActivityIndicator size="large" color="#00ff00" style={{flex:1 ,justifyContent: 'center'}} />
        ) : (
          <View style={{  justifyContent: 'space-evenly'}}>
          <FlatList
            data={suppliers}
            style={{ flexGrow: 5.5  }}
            //contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <View>
                <Supplier item={item} sport={route.params.sport ? route.params.sport :  route.params.type}/>
              </View>
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
