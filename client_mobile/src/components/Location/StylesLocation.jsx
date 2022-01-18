import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  title: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    flex: 0.5,
  },
  maps: {
    flex: 9,
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    marginBottom: 20,
  },
  PickerContainer: {
    flex: 2,
    flexDirection: "row",
    marginBottom: 40,
    justifyContent: "flex-start",
  },
});
