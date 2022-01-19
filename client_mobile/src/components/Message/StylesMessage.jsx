import {
    StyleSheet,
  } from "react-native";
import { color } from "react-native-reanimated";
  
export 
const styles = StyleSheet.create({
  btnUser: {
    marginTop: 40,
    width: 130,
    height: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#179F34',
  },
  text: {
    color: 'white',
  },
  question: {
    fontWeight: "700",
    fontSize: 18,
    margin: 10,
    textAlign: 'center'
  },
  container: { flex: 1, alignItems: "center" , justifyContent: 'center' },
});