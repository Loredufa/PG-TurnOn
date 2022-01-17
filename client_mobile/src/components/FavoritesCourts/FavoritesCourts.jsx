import { Text, View, FlatList ,ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Court from "../Court/Court";
import { styles } from "./StyleFavoritesCourts";
import Supplier from "../Supplier/Supplier";

export default function FavoritesCourts() {
  const {favorites , screenWidth} = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <View style={styles.searchBarPos}>
        <SearchBar />
      </View>
      <View style={{flex: 5}}>
        {favorites.length !== 0 ? (
          <FlatList
            data={favorites}
            style={{ flexGrow: 5.5 }}
            //contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
            <View>
              <Supplier item={item} />
              </View>)}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            //numColumns={3}
            keyExtractor={(item) => item.id}
            />
      ) : (
        <ActivityIndicator size="large" color="#00ff00" style={{flex:1 ,justifyContent: 'center'}} />
        )}
        </View>
      </View>
  );
}
