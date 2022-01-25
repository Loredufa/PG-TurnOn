import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  searchBarPos: {
    justifyContent: "flex-start",
    paddingBottom: 10,
    flex: 0.5,
  },
  globalContainer: {
    flexDirection: "column",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,

    alignItems: "center",
    //justifyContent: "center",
    padding: 6,
    /*
     */
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "#000",
    elevation: 20,
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
    flex: 3,
    justifyContent: "flex-start",
    //marginTop: 10,
  },
  card2: {
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "#000",
    elevation: 20,

    //borderColor: "black",
  },
  sport: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  supplier: {
    textAlign: "left",
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 15,
  },
  ratingContainer: {
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 15,
    paddingTop: 10,
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    flex: 0.5,
  },
});
