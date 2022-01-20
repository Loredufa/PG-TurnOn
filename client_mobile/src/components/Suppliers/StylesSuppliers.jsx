import {
    StyleSheet,
  } from "react-native";
  
export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  searchBarPos: {
    justifyContent: "flex-start",
    flex:0.7,
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    flex: 0.5,
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
  filter: {
    marginBottom: 10,
    alignSelf:'center',
    alignItems: 'center',
    backgroundColor: '#2A2D34',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textFilter: {
    color:'white'
  }
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