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
import SearchBar from "../SearchBar/SearchBar";
import Court from "../Court/Court";
import {styles} from './StyleCourts';


export default function Courts({ route }) {
  //const navigation = useNavigation();
  const courts = useSelector((state) => state.courtTypes);
  const {screenWidth } = useSelector(state => state)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
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
      <SearchBar/>
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
            style={{ flexGrow: 5.5 , width: screenWidth }}
            contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <Court item={item}/>
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

