import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  searchBarPos: {
    justifyContent: "flex-start",
    flex:0.7,
  },
  globalContainer: {
    flexDirection: "column",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth:1,
    margin: 10,
    
    alignItems: "center",
    //justifyContent: "center",
    padding: 2,

    shadowColor: "#000",
    shadowOpacity: 0.30,
    shadowRadius: 5,

    elevation: 8,
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
  card2: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    flexDirection: "column",

    //borderColor: "black",
  },
  sport: {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
  },
  supplier: {
    textAlign: "left",
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  ratingContainer: {
    marginLeft: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    flex: 0.5,
  },
});
