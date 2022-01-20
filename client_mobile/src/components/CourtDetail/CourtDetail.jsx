import React, { useEffect, useState ,useCallback } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  Linking
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, bookCourt } from "../../store/actions/index";
import { styles } from "./StyleCourtDetail";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";
import { useNavigation } from "@react-navigation/native";
import { images } from "../Supplier/Supplier";

import Message from "../Message/Message";
import { set } from "react-native-reanimated";
import ConfirmBooking from "../ConfirmBooking/ConfirmBooking";

export default function CourtDetail({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user, favorites, messageBack } = useSelector((state) => state);
  //console.log(favorites);
  let { court } = route.params;
  const [bookingRef , setBookingRef] = useState({
    court,
    day: '',
    timeSelected:''
  })
  const [confirmScreen , setConfirmScreen] = useState(false);

  const screenWidth = useSelector((state) => state.screenWidth);
  const titleSize = useSelector((state) => state.titleSize);


  function handlerBooking() {
    let day = date.split("-").join("/");
    //console.log(typeof day);
    //dispatch(bookCourt(route.params.court.id, user.user.id, day, timeSelected));
    setBookingRef({court , day , timeSelected});
    setConfirmScreen(true);

  }
  
  const [timeSelected, setTimeSelected] = useState("Horario");
  const [date, setDate] = useState("");
  
  let [coordinates, setCoordinates] = useState(
    route.params.coordinates.split(" ")
    );
    //let coordinates = court.coordinates.split(" ");
  function onChange(itemValue) {
    setTimeSelected(() => {
      const newInput = itemValue;
      return newInput;
    });
  }
  useEffect(() => {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = day + "-" + month + "-" + now.getFullYear();
    //var today = now.getFullYear() + "-" + (month) + "-" + (day);
    
    setDate(today);
  }, []);
  //console.log(court);

  //////////  MERCADO PAGO ////////////////
  const handlePress = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  return messageBack !== "" ? (
    <Message />
    ) : (
      <View style={{ justifyContent: "center", flex: 1 }}>
      <ConfirmBooking 
      onBook={handlePress}
      visible={confirmScreen} 
      bookingRef={bookingRef} 
      onClose={() => setConfirmScreen(false)}/>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{court.name}</Text>
          {/* <MaterialCommunityIcons
          name="close-circle-outline"
          size={25}
          color={"black"}
          style={{ marginLeft: 10, marginRight: 20 }}
        /> */}
        </View>
        <Image
          source={{
            uri: court.image ? court.image : images[court.sport],
          }}
          style={{
            flex: 3,
            //height: screenWidth / 3,
            width: screenWidth / 1.6,
            padding: 3,
            borderRadius: 10,
          }}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{court.description}</Text>
        </View>
        <View style={styles.optionsContainer}>
          {/* <Text style={{ marginRight: 20, borderWidth: 1 }}>Horario</Text> */}
          {/* <Text style={styles.date}>Dia</Text> */}
          <DatePicker
            date={date}
            style={styles.date}
            mode="date"
            //placeholder="Dia"
            format="DD/MM/YYYY"
            minDate="01-01-2022"
            maxDate="01-01-2030"
            confirmBtnText="Ok"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: {
                // position: 'absolute',
                // right: -5,
                // top: 4,
                // marginLeft: 0,
              },
              dateInput: {
                borderColor: "gray",
                alignItems: "center",
                borderWidth: 0,
                //borderRadius: 10,
                borderBottomWidth: 1,
              },
              placeholderText: {
                fontSize: 17,
                color: "gray",
              },
              dateText: {
                fontSize: 17,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
          <Picker
            style={{
              //width: screenWidth / 3,
              justifyContent: "center",
              //marginTop: 20,
              flex: 1,
            }}
            selectedValue={timeSelected}
            onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
          >
            <Picker.Item label="Horario" value="Horario" />
            {court.timetable?.map((e, i) => (
              <Picker.Item key={i} label={e} value={e} />
            ))}
          </Picker>
        </View>
        <View style={styles.priceAndLocationContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.textPrice}>Precio: {court.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.locationContainer}
            onPress={() =>
              navigation.navigate("Ubicacion", {
                courtLocation: [
                  {
                    latitude: parseFloat(coordinates[0]),
                    longitude: parseFloat(coordinates[1]),
                    title: court.name,
                    description: court.description,
                    id: 1,
                  },
                ],
              })
            }
          >
            <MaterialCommunityIcons
              name={"location"}
              color={"#E64E39"}
              size={30}
            />
            <Text style={styles.text}>Ver en el Mapa</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlerBooking}>
          {/* <View style={styles.button}> */}
          <Text style={styles.buttonText}>Reservar</Text>
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}
