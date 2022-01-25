import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Modal
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { useSelector , useDispatch } from 'react-redux';
import { ViewBase } from "react-native";
import { images } from "../Supplier/Supplier";
import {styles} from './StylesRatingBooking';

export default function RatingBooking({name, booking , visible , onClose , supplierId , bookingId , onRate}) {
    const {screenWidth} = useSelector(state => state);
    const dispatch = useDispatch();
    const [stars , setStars] = useState(0);
  return (
    <Modal animated transparent animationType="fade" visible={visible}>
      <View style={styles.container}>
            <View style={styles.detail}>
                <Text style={styles.title}>¿Como fue tu experiencia en           {name}?</Text>
                <View style={styles.ratingContainer}>
                <TouchableOpacity onPress={() => setStars(1)} style={{marginRight:3}}>
                    {stars>=1? (
                    <MaterialCommunityIcons name="star" size={35} color="#FFC900" />
                    ) : (
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={35}
                        color="black"
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setStars(2)} style={{marginRight:3}}>
                    {stars>=2? (
                    <MaterialCommunityIcons name="star" size={35} color="#FFC900" />
                    ) : (
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={35}
                        color="black"
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setStars(3)} style={{marginRight:3}}>
                    {stars>=3? (
                    <MaterialCommunityIcons name="star" size={35} color="#FFC900" />
                    ) : (
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={35}
                        color="black"
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setStars(4)} style={{marginRight:3}}>
                    {stars>=4? (
                    <MaterialCommunityIcons name="star" size={35} color="#FFC900" />
                    ) : (
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={35}
                        color="black"
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setStars(5)} style={{marginRight:3}}>
                    {stars>=5? (
                    <MaterialCommunityIcons name="star" size={35} color="#FFC900" />
                    ) : (
                      <MaterialCommunityIcons
                        name="star-outline"
                        size={35}
                        color="black"
                      />
                    )}
                  </TouchableOpacity>
            
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                    onPress={() => {
                      onRate(supplierId , stars , bookingId)
                      setStars(0);
                    }}
                    style={[styles.btnEdit , { width: screenWidth / 3.2, height: screenWidth / 11.5 }]}
                    >
                      <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.btnCancel  , { width: screenWidth / 3.2, height: screenWidth / 11.5 }]} 
                    onPress={() => 
                      { onClose(bookingId) 
                      setStars(0)}}>
                      <Text style={styles.textCancel}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );
}
