import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeTab from "../Home/HomeTab";
import User from "../User/User";
import { styles } from "./StylesSupplier";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import {
  addToFavorite,
  changeMessage,
  deleteFromFavorite,
  getFavorites,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export const images = {
  Futbol:
    "https://i.pinimg.com/originals/37/ee/9e/37ee9e13208a4b3a3cb3c49ae7d4338c.png",
  Golf: "https://2.bp.blogspot.com/-ZIMcXanor7I/WZhBGNfOLAI/AAAAAAAHVTA/mEfwzM42yX4RwpS6CwumQ0ZhHsou1m9EwCLcBGAs/s1600/Golf-Ball-PNG-Clipart.png",
  Hockey:
    "https://images.vexels.com/media/users/3/227283/isolated/preview/90710bdb5ce01b6d75b9bc710c116f3c-palos-de-hockey-azul-y-verde-planos.png",
  Paddle: "https://cdn-icons-png.flaticon.com/512/434/434062.png",
  Tenis:
    "https://images.vexels.com/media/users/3/132448/isolated/preview/baf01fb517749ccf4e1215d7576fe262-pelota-de-tenis.png",
  Otros: "https://images-na.ssl-images-amazon.com/images/I/61poZwdANWL.png",
  Favoritos: "https://cdn5.dibujos.net/dibujos/pintar/corazon_2.png",
  Busqueda:
    "https://play-lh.googleusercontent.com/WL9oSrJxfO6XDrSnuERVcjFXN--XztDibPGtAxIJsJBfm2ZAv4WvkR5yFuOcFKKR0_A",
};

export default function Supplier({ item, sport }) {
  const { screenWidth, favorites, user, supplierAddFav, messageBack } =
    useSelector((state) => state);
  //console.log(favorites);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [status , setStatus] = useState(false);

  useEffect(() => {
    dispatch(getFavorites(user.user.id));
    if (messageBack === "EL proveedor no es mas favorito") {
      dispatch(changeMessage());
    }
  }, [supplierAddFav, messageBack]);

  let arrayAux = [];
  item.fields?.forEach((element) => {
    if (!arrayAux.includes(element.sport)) arrayAux.push(element.sport);
  });

  function handlerFavorites() {
    if (favorites?.find((element) => element.id === item.id)) {
      dispatch(deleteFromFavorite(item.id, user.user.id));
    } else {
      dispatch(addToFavorite(item.id, user.user.id));
    }
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Courts", {
          name: item.name, //No se si son necesarios
          sport: sport,
          id: item.id, //No se si son necesarios
          coordinates: item.coordinates,
        })
      }
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderRadius: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: "#3FC959",
          //backgroundColor: '#F8F1D9'
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          height: screenWidth / 3,
          width: screenWidth / 1.1,

          backgroundColor: "white",
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowColor: "#000",
          elevation: 20,
        }}
      >
        <Image
          source={{
            uri: item.image ? item.image : images[sport],
          }}
          style={styles.img}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{item.businessname}</Text>
          <View style={styles.sports}>
            <Text style={styles.sportText}>Deportes:</Text>
            {arrayAux.map((el) => (
              <Text style={styles.sportText}>{el}</Text>
            ))}
          </View>
          <Text style={styles.sportText}>Direccion: {item.address}</Text>
          {/*<Text style={styles.mail}>{item.mail}</Text>*/}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "space-evenly",
              padding: 3,
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={handlerFavorites}>
              {favorites?.find((element) => element.name === item.name) ? (
                <MaterialCommunityIcons name="heart" size={25} color="red" />
              ) : (
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={25}
                  color="black"
                />
              )}
            </TouchableOpacity>
            <View style={styles.containerRating}>
              <MaterialCommunityIcons name="star" size={20} color="#FFC900" />
              <Text style={styles.rating}>{/*item.rating*/}5</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
