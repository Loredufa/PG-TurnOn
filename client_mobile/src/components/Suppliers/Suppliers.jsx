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
  Modal
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import SearchBar from "../SearchBar/SearchBar";
import { styles } from "./StylesSuppliers";
import Court from "../Court/Court";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, getSupplierBySport } from "../../store/actions";
import Supplier from "../Supplier/Supplier";
import PickerModal from "../PickerModal/PickerModal";
import { useNavigation } from "@react-navigation/native";

export default function Suppliers({ route }) {

  const { screenWidth, suppliers } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [showPicker, setShowPicker] = useState(false);
  /*
  if(route.params.sport === "Otros") {
    const [sportFilter , setSportFilter] = useState('others');
  } else {
    const [sportFilter , setSportFilter] = useState('');
  }
  */
  const [sportFilter , setSportFilter] = useState('');

  useEffect(()=> {
    if (route.params.sport === "Otros") {
      dispatch(getSupplierBySport("others"))
      setSportFilter('others')
    }
    else {
      route.params.sport && dispatch(getSupplierBySport(route.params.sport));
    }
  },[])
  
  function handlerSelected (value) {
      setShowPicker(false)
      if (value === "Otros") {
        setSportFilter('others');
        dispatch(getSupplierBySport("others"))
      }
      else {
        setSportFilter(value);
        dispatch(getSupplierBySport(value));
      }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {route.params.sport && route.params.sport}
        {route.params.type && route.params.type}
      </Text>
      <View style={styles.searchBarPos}>
        <SearchBar screen={ sportFilter === ''? route.params.sport : sportFilter}
        />
      </View>
      <View style={{flex:5}}>
      {route.params.sport === "Otros" &&
          <View style={[styles.filter, { width: screenWidth / 3, height: screenWidth / 11.5 }]}>
            <TouchableOpacity onPress={() => setShowPicker(true)}>
              <Text style={styles.textFilter}>Filtrar por deporte</Text>
            </TouchableOpacity>
            <PickerModal
            visible={(showPicker)}
            title="Deportes"
            items={['Otros', 'Basket', 'Pool' , 'Squash' , 'Voley']}
            onClose={() => setShowPicker(false)}
            onSelect={handlerSelected}
            //value={showPicker ? user[showPicker] : ''}
            />
            </View>}
      {suppliers.length === 0 ? (
          <ActivityIndicator size="large" color="#00ff00" style={{flex:1 ,justifyContent: 'center'}} />      
        ) : 
        (  
          <View style={{  justifyContent: 'space-evenly'}}>
          <FlatList
            data={suppliers}
            style={{ flexGrow: 5.5  }}
            //contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <View>
                <Supplier 
                item={item} 
                sport={sportFilter === ''? route.params.sport : sportFilter}
                />
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
