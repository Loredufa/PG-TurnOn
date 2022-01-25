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
  Voley:
    "https://prints.ultracoloringpages.com/647b8308c601b394d1b5963f10f029ad.png",
};

export default function Supplier({ item, sport }) {
  const { screenWidth, favorites, user, supplierAddFav, messageBack } =
    useSelector((state) => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
          sport: sport !== "Otros" ? sport : "others",
          id: item.id, //No se si son necesarios
          coordinates: item.coordinates,
        })
      }
    >
      <View
        style={[
          styles.container,
          {
            height: screenWidth / 2.5,
            width: screenWidth / 1.1,
          },
        ]}
      >
        <Image
          source={{
            uri: item.image ? item.image : images[sport],
          }}
          style={styles.img}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.sportText}>
            Deportes:
            {arrayAux.map((el, index) =>
              index === arrayAux.length - 1 ? " " + el : " " + el + " -"
            )}
          </Text>
          <Text style={styles.sportText}>{item.address}</Text>
          {/*<Text style={styles.mail}>{item.mail}</Text>*/}
          <View style={styles.icons}>
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
              <Text style={styles.rating}>{item.reputation.toFixed(1)}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
