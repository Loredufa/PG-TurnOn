import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView from "react-native-maps";
import { locales, rutas } from "./rutas";
import { styles } from "./StylesLocation";
import { Picker } from "@react-native-picker/picker";
import {
  getAllSuppliers,
  getSupplierLocation,
} from "../../store/actions/index";
//import Geolocation from "@react-native-community/geolocation";

//Geolocation.getCurrentPosition((info) => console.log(info));

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = -38.94628712569298;
const LONGITUDE = -68.05909815431862;
const LATITUDE_DELTA = 0.0922;
const LONGITUD_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Location(props) {
  // Geolocation.getCurrentPosition((info) => console.log(info));
  const dispatch = useDispatch();
  let sportTypes = [
    "Futbol",
    "Tenis",
    "Golf",
    "Paddle",
    "Hockey",
    "Basket",
    "Pool",
    "Squash",
    "Voley",
  ];

  const geoLocation = useSelector((state) => state.geoLocation);
  console.log("LLEGO GEOLO", geoLocation);
  const [region, setRegion] = useState({
    latitude: geoLocation.coords ? geoLocation.coords.latitude : LATITUDE,
    longitude: geoLocation.coords ? geoLocation.coords.longitude : LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUD_DELTA,
  });
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (geoLocation.coords) {
      setRegion((geo) => {
        const newGeo = {
          ...geo,
          latitude: geoLocation.coords.latitude,
          longitude: geoLocation.coords.longitude,
        };
        return newGeo;
      });
    } else
      setRegion((geo) => {
        const newGeo = {
          ...geo,
          latitude: LATITUDE,
          longitude: LONGITUDE,
        };
        return newGeo;
      });
  }, [geoLocation.coords]);

  const [coordenadas, setCoordenadas] = useState({});
  const [section, setSection] = useState("Deporte");
  const suppliersLocation = useSelector((state) => state.suppliersLocation);
  const [courts, setCourts] = useState(suppliersLocation);

  useEffect(() => {
    props.route.params?.courtLocation
      ? setCourts(props.route.params?.courtLocation)
      : setCourts(suppliersLocation);
  }, [props.route.params?.courtLocation]);

  /* useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        const coordenadas = JSON.stringify(posicion);

        setCoordenadas({ coordenadas });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  });
  console.log(coordenadas);
  */
  function onChange(itemValue) {
    setSection(() => {
      const newInput = itemValue;
      return newInput;
    });
    if (itemValue === "Deportes")
      setCourts(() => {
        const newInput = suppliersLocation;
        return newInput;
      });
    else {
      let court = suppliersLocation?.filter((e) => e.sport.includes(itemValue));
      setCourts(() => {
        const newInput = court;
        return newInput;
      });
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cerca de ti</Text>
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
        showsUserLocation={user.location}
        followsUserLocation={user.location}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        //toolbarEnabled={true}
        zoomControlEnabled={true}
      >
        {
          // props.route.params?.courtLocation ? (
          //   <MapView.Marker
          //     coordinate={{
          //       latitude: props.route.params.courtLocation[0].latitude,
          //       longitude: props.route.params.courtLocation[0].longitude,
          //     }}
          //     title={props.route.params.courtLocation[0].title}
          //     description={props.route.params.courtLocation[0].description}
          //   />
          // ) : (
          courts.map((element) => (
            <MapView.Marker
              key={element.id}
              coordinate={{
                latitude: element.latitude,
                longitude: element.longitude,
              }}
              title={element.title}
              description={element.description}
            />
          ))
          // )
        }
      </MapView>
    </View>
  );
}
