import {
    StyleSheet,
  } from "react-native";
  
export 
const styles = StyleSheet.create({
  inputContainers: {
    alignItems: "center",
  },
  input: {
    width: 280,
    height: 40,

    marginTop: 15,

    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: "white",

    paddingLeft: 10,
  
    alignContent: 'center',
    justifyContent: 'center',
  },
  info: {
    textAlign: 'center',
  },
  btnUser: {
    marginTop: 40,
    width: 130,
    height: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
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
  btnEdit: {
    alignSelf: "center",
    marginTop: 40,
    width: 130,
    height: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
  },
});