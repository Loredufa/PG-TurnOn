import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
import { locales } from "./rutas";
import { styles } from "./StylesLocation";
import { Picker } from "@react-native-picker/picker";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = -38.94628712569298;
const LONGITUDE = -68.05909815431862;
const LATITUDE_DELTA = 0.0922;
const LONGITUD_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Location() {
  let sportTypes = ["futbol", "tenis", "golf", "paddle", "hockey"];

  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUD_DELTA,
  });

  const [section, setSection] = useState("Deporte");
  const [courts, setCourts] = useState(locales);

  function onChange(itemValue) {
    setSection(() => {
      const newInput = itemValue;
      return newInput;
    });
    if (itemValue === "Deportes")
      setCourts(() => {
        const newInput = locales;
        return newInput;
      });
    else {
      let court = locales?.filter((e) => e.sport === itemValue);
      // setCourts(court);
      setCourts(() => {
        const newInput = court;
        return newInput;
      });
    }
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        Cerca Tuyo
      </Text>
      <View style={styles.PickerContainer}>
        <Picker
          style={{ flex: 1 }}
          selectedValue={section}
          onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
        >
          <Picker.Item label="Deportes" value="Deportes" />
          {sportTypes?.map((e, i) => (
            <Picker.Item key={i} label={e} value={e} />
          ))}
        </Picker>
        {/* <PickerIOS
          style={{ flex: 1, borderWidth: 1, width: 10, height: 30 }}
          selectedValue={section}
          onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
        >
          <PickerIOS.Item label="Deportes" value="Deportes" />
          {sportTypes?.map((e, i) => (
            <PickerIOS.Item key={i} label={e} value={e} />
          ))}
        </PickerIOS> */}
      </View>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        /*style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}*/
        style={styles.maps}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        initialRegion={region}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        //toolbarEnabled={true}
        zoomControlEnabled={true}
      >
        {courts.map((element) => (
          <MapView.Marker
            key={element.id}
            coordinate={{
              latitude: element.latitude,
              longitude: element.longitude,
            }}
            title={element.title}
            description={element.description}
          />
        ))}
      </MapView>
    </View>
  );
}
