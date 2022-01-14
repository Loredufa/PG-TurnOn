import {
    StyleSheet,
  } from "react-native";
import { color } from "react-native-reanimated";
  
export 
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 10,
    fontSize:30,
    fontWeight: 'bold',
  },
  inputContainers: {
    alignItems: "center",
    justifyContent:'center',
  },
  input: {
    width: 280,
    height: 40,
    marginTop: 15,

    borderRadius: 20,
    borderWidth: 1,
    /*color: 'white',
    borderColor: 'transparent',*/

    paddingLeft: 10,
  
    alignContent: 'center',
    justifyContent: 'center',
  },
  info: {
    textAlign: 'center',
    //color: 'white',
  },
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
    color: 'white'
  },
  cuenta: {
    display: "flex",
    flexDirection: "row",
    alignSelf: 'center',
  },
  text: {
    textAlign: "center",
    padding: 20,
    color: "black",
  },
  btnDelete: {
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
    backgroundColor: '#FFC900',
  },
});