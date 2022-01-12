import {
    StyleSheet,
  } from "react-native";
  
export 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "column",
  },
  searchBarPos: {
    justifyContent: "flex-start",
    marginTop: 20,
  },
  globalContainer: {
    flexDirection: "column",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,

    //borderColor: "black",
  },
  input: {
    width: 280,
    height: 40,

    marginTop: 15,

    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: "white",

    paddingLeft: 10,
  },
  containerSearch: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
  },
  button: {},
  //icon: { fontSize: 15 },
  review: {
    flex: 2,
    justifyContent: "flex-start",
  },
});
