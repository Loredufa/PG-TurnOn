import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    //flex: 1,
    borderRadius: 10,
    margin: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    height: "85%",
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "#000",
    elevation: 20,
    borderColor: "#3fc959",
  },
  hourItem: {
    fontSize: 15,
  },
  nameContainer: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 5,
    //flexDirection: "row",
  },
  nameText: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
  },
  optionsContainer: {
    flex: 3,
    flexDirection: "row",
    //margin: 20,
    //justifyContent: "space-between",
  },
  button: {
    flex: 1,
    //marginTop: 30,
    width: 130,
    //height: 35,
    alignItems: "center",
    backgroundColor: "#3FC959",
    borderRadius: 20,
    //borderWidth: 0,
    borderColor: "black",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  name: {
    flex: 1,
    marginRight: 20,
    marginTop: 20,
    //justifyContent: "center",
    //alignItems: "center",
  },
  date: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: "center",
    //paddingTop: 20,
    // borderWidth: 1,
  },
  description: {
    textAlign: "justify",
    fontSize: 18,
  },
  descriptionContainer: {
    flex: 2,
    justifyContent: "flex-start",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  priceAndLocationContainer: {
    flex: 1,
    flexDirection: "row",
    //margin: 20,
  },
  priceContainer: {
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "center",
    //marginTop: 5,
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textPrice: {
    fontSize: 18,
    paddingTop: 6,
  },
  text: {
    fontSize: 18,
    paddingTop: 6,
    textDecorationLine: "underline",
  },
});
