import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  input: {
    //width: 280,
    //height: 40,

    marginTop: 15,

    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: "white",

    paddingLeft: 10,
  },
  img: {
    //width: 150,
    //height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  inputContainers: {
    alignItems: "center",
  },
  notfulfilled: {
    //width: 280,
    //height: 40,

    marginTop: 15,

    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: "white",

    borderColor: "red",
    color: "red",

    paddingLeft: 10,
  },
  button: {
    marginTop: 30,
    //width: 130,
    //height: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "black",
    justifyContent: "center",
    backgroundColor: "#179F34",
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  login: {
    marginLeft: 10,
    color: "blue",
  },
  acount: {
    marginRight: 10,
  },
  text: {
    textAlign: "justify",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    //color: "red",
  },
});
