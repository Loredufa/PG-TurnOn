import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
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
  searchBarPos: {
    justifyContent: "flex-start",
    marginTop: 20,
    flex: 1,
  },
  title: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
