import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
  },
  optionsContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    marginTop: 30,
    width: 130,
    height: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "black",
  },
});
