import {
  Text,
  View,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Court from "../Court/Court";
import {styles} from './StyleFavoritesCourts';

export default function FavoritesCourts({ route }) {
  const favorites = useSelector((state) => state.favorites);
  return (
    <View style={styles.container}>
      <SearchBar/>
      {favorites.length !== 0 ? (
        <View
        style={{
          flex: 6,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        >
        <Text
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Favoritos
        </Text>
        <FlatList
          data={favorites}
          style={{ flexGrow: 5.5 }}
          contentContainerStyle={{ alignItems: "center" }}
          renderItem={({ item }) => (
            <Court item={item}/>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            //numColumns={3}
            keyExtractor={(item) => item.id}
        />
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}


