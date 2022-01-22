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
import { addToFavorite, bookCourt, MPbookingDetails , courtAvailability ,findPayment , setMessage} from "../../store/actions/index";
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
  const { user, favorites, messageBack , availables , payment} = useSelector((state) => state);
  console.log("INFO DEL USUARIO" , user);
  console.log("LAS DISPONIBLES" , availables);
  let { court , supplierID} = route.params;
  const [bookingRef , setBookingRef] = useState({
    court,
    day: '',
    timeSelected:''
  })
  const [confirmScreen , setConfirmScreen] = useState(false);

  const screenWidth = useSelector((state) => state.screenWidth);
  const titleSize = useSelector((state) => state.titleSize);
  const [reservationCode , setRC ] = useState(0);
  
  function handlerBooking() {
    let day = date.split("-").join("/");
    //console.log(typeof day);
    //dispatch(bookCourt(route.params.court.id, user.user.id, day, timeSelected));
    setRC (Math.round(Math.random() * (9999 - 1000) + 1000));
    dispatch(MPbookingDetails(
      court.price , 
      court.id , 
      user.user.id , 
      supplierID,
      court.name,
      reservationCode));
    setBookingRef({court , day , timeSelected});
    setConfirmScreen(true);

  }
  
  const [timeSelected, setTimeSelected] = useState("");
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
    console.log("La fecha de hoy" , today)
    setDate(today);
    let dateArr = today.split("-");
    var d = new Date(dateArr[2], dateArr[1]-1, dateArr[0]);
    d = d.getDay();
    var daysOfWeek = ['Domingo' , 'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado'];
    let day1 = daysOfWeek[d]
    dispatch(courtAvailability(court.id , dateArr.join('/') , day1));
  }, []);
  //console.log(court);

  /////////////////////////////////  MERCADO PAGO ////////////////////////////////////////////////
  
  const [screenPayment , setScreenPayment] = useState(false);
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
    setConfirmScreen(false);
    setScreenPayment(true)
  }

  function handlerDate () {
      setDate(date);
      let dateArr = date.split("-");
      var d = new Date(dateArr[2], dateArr[1]-1, dateArr[0]);
      d = d.getDay();
      var daysOfWeek = ['Domingo' , 'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado'];
      let day = daysOfWeek[d]
      console.log(court.id , dateArr.join('/') , day)
      dispatch(courtAvailability(court.id , dateArr.join('/') , day));
  }

  function handlerPayment () {
    dispatch (findPayment(supplierID)); 
    setScreenPayment(false);
  }

  useEffect(() => {
    let dateArr = date.split("-");
    var d = new Date(dateArr[2], dateArr[1]-1, dateArr[0]);
    d = d.getDay();
    var daysOfWeek = ['Domingo' , 'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado'];
    let day = daysOfWeek[d]
    let thePayment = payment.find (e => e.reservationCode === reservationCode);
    if (thePayment?.payment_status === 'approved') {
      dispatch(bookCourt(route.params.court.id, user.user.id, day , dateArr.join('/') , reservationCode , timeSelected , supplierID));
      setRC(0);
      //navigation.navigate('Home');
    } else {
      reservationCode !== 0 && dispatch(setMessage());
      setRC(0);
    }
  }, [payment])

  return messageBack !== "" ? (
    <Message />
  ) : (
      screenPayment? 
      <View style={{ justifyContent: "center", flex: 1 , alignItems: "center" }}>
          <View style={styles.container}>
            <Text style={styles.alert}>Esperando la confirmación del pago de mercado pago</Text>
            <TouchableOpacity 
            style={styles.btn} 
            onPress={handlerPayment}
            >
            <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
      </View>
      :
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
            onDateChange={handlerDate}
          />
            {
              availables?.length?
              <Picker
            style={{
              //width: screenWidth / 3,
              justifyContent: "center",
              //marginTop: 20,
              flex: 1,
            }}
            itemStyle={styles.hourItem}
            selectedValue={timeSelected}
            onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            >
              <Picker.Item label="Disponibles" value="Disponibles" />
              {availables?.map((e, i) => (
                <Picker.Item key={i} label={`${e.initialTime}-${e.endingTime}`} value={`${e.initialTime}-${e.endingTime}`} />
              ))}
              </Picker>
              :
              <Picker
            style={{
              //width: screenWidth / 3,
              justifyContent: "center",
              //marginTop: 20,
              flex: 1,
              
            }}
            itemStyle={styles.hourItem}
            selectedValue={timeSelected}
            onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            >
              <Picker.Item label="Elegir fecha" value="Elegir fecha"  />
            </Picker>
            }
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
        <TouchableOpacity 
        style={styles.button} 
        onPress={handlerBooking}
        disabled={timeSelected === "Disponibles" || timeSelected === "Elegir fecha" }
        >
          <Text style={styles.buttonText}>Reservar</Text>
          {/* </View> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}
