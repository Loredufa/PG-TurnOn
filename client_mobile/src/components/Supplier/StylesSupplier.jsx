import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#3FC959",
    //backgroundColor: '#F8F1D9'
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "#000",
    elevation: 20,
  },
  img: {
    height: "90%",
    width: "35%",
    padding: 3,
    borderRadius: 10,
    alignItems: "center",
  },
  info: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 5,
    //alignItems: "flex-start",
  },
  name: {
    flex: 1,
    alignSelf: "center",
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  sportText: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
  },
  mail: {
    flex: 1,
    alignSelf: "center",
    marginLeft: 10,
  },
  containerRating: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 2,
  },
  rating: {
    marginLeft: 5,
    paddingTop: 5,
    fontSize: 15,
    fontWeight: "500",
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    padding: 3,
    marginTop: 10,
  },
});
