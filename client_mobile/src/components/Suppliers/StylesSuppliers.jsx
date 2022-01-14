import {
    StyleSheet,
  } from "react-native";
  
export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  searchBarPos: {
    justifyContent: "flex-start",
    marginTop: 20,
  },
  title: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  containerSearch: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
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
  /*
  card: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,

    //borderColor: "black",
  },
  */
  });