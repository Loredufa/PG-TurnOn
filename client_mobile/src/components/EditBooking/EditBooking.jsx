import React, { useEffect, useState ,useCallback } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  Linking,
  Modal
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { changeBooking ,courtAvailability } from "../../store/actions/index";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";
import { useNavigation } from "@react-navigation/native";
import { images } from "../Supplier/Supplier";
import {styles} from './StylesEditBooking';

import Message from "../Message/Message";
import { set } from "react-native-reanimated";
import ConfirmBooking from "../ConfirmBooking/ConfirmBooking";

export default function EditBooking({ booking , visible , onClose , onEdit}) {
    const {screenWidth , availables} = useSelector(state => state);
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    const [timeSelected, setTimeSelected] = useState("");

   


    function onChange(itemValue) {
        setTimeSelected(() => {
          const newInput = itemValue;
          return newInput;
        });
      }
      useEffect(() => {
        let now = new Date();
        let day = ("0" + now.getDate()).slice(-2);
        let month = ("0" + (now.getMonth() + 1)).slice(-2);
        let today = day + "-" + month + "-" + now.getFullYear();
        //var today = now.getFullYear() + "-" + (month) + "-" + (day);
        // console.log("La fecha de hoy" , today)
        setDate(today);
        let dateArr = today.split("-");
        let d = new Date(dateArr[2], dateArr[1]-1, dateArr[0]);
        d = d.getDay();
        let daysOfWeek = ['Domingo' , 'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado'];
        let day1 = daysOfWeek[d]
        dispatch(courtAvailability(booking.court.id , dateArr.join('/') , day1));
      }, []);

      function handlerDate (newDate) {
        setDate(newDate);
        let dateArr = newDate.split("-");
        let d = new Date(dateArr[2], dateArr[1]-1, dateArr[0]);
        d = d.getDay();
        let daysOfWeek = ['Domingo' , 'Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado'];
        let day = daysOfWeek[d]
        // console.log(booking.court.id , dateArr.join('/') , day)
        dispatch(courtAvailability(booking.court.id , dateArr.join('/') , day));
    }
  return (
    <Modal animated transparent animationType="fade" visible={visible}>
      <View style={styles.container}>
            <View style={styles.detail}>
                <View style={styles.info}>
                    <Text style={styles.title1}>Editar reserva en</Text>
                    <Text style={styles.title}>{booking.court.name}</Text>
                    <View style={{flex:1, paddingTop:10}}>
                    <Text style={styles.text}>Seleccionar dia y horario para editar la reserva</Text>
                    <Text style={styles.text}>actuales {booking.booking.date} de {booking.booking.initialTime} a {booking.booking.endingTime} </Text>
                    </View>
          {/* <Text style={{ marginRight: 20, borderWidth: 1 }}>Horario</Text> */}
          {/* <Text style={styles.date}>Dia</Text> */}
        <View style={styles.optionsContainer}>
          <DatePicker
            date={date}
            style={styles.date}
            mode="date"
            //placeholder="Dia"
            format="DD-MM-YYYY"
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
                fontSize: 15,
                color: "gray",
              },
              dateText: {
                fontSize: 15,
              },
            }}
            onDateChange={(newDate) => handlerDate(newDate)}
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
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                    style={[styles.btnEdit , { width: screenWidth / 3.2, height: screenWidth / 11.5 }]}
                    onPress={() => onEdit(booking.booking.id , date , timeSelected)}
                    >
                      <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.btnCancel  , { width: screenWidth / 3.2, height: screenWidth / 11.5 }]} 
                    onPress={onClose}>
                      <Text style={styles.textCancel}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );
}
