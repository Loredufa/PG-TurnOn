import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Modal
} from "react-native";
import { useSelector } from "react-redux";
import {styles} from './StylesConfirmBooking';

export default function ConfirmBooking({visible , bookingRef , onClose , onBook}) {
    const {screenWidth , MPurl} = useSelector(state => state);
    /*const MPurl =
    "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1059164600-a4b75369-79de-4b42-9fa4-c7fe20665609";
    */
    return (
    <Modal animated transparent animationType="fade" visible={visible}>
        <View style={styles.container}>
            <View style={styles.detail}>
                <View style={styles.info}>
                    <Text style={styles.title}>{bookingRef?.court.name}</Text>
                    <View style={styles.column}>
                        <Text>Dia: </Text>
                        <Text>{bookingRef?.day}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text>Horario: </Text>
                        <Text>{bookingRef?.timeSelected}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text>Precio: </Text>
                        <Text>{bookingRef?.court.price}</Text>
                    </View>
                    <Text style={styles.text}>Recorda que para reservar hay que realizar una seña del 10%, en caso de cancelar con 48hs de anticipación recibiras un voucher para utilizar en la misma cancha.</Text>
                    <View style={styles.column}>
                        <Text>Monto a señar: </Text>
                        <Text>${Math.round(bookingRef?.court.price.split('$')[1]/10)}</Text>  
                    </View>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                    style={[styles.btnEdit , { width: screenWidth / 3.2, height: screenWidth / 11.5 }]}
                    onPress={() => onBook(MPurl)}>
                      <Text style={styles.buttonText}>Señar y reservar</Text>
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