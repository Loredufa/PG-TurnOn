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
  button: {
    flex: 1,
    //marginTop: 30,
    width: 130,
    //height: 35,
    alignItems: "center",
    backgroundColor: "#FFC900",
    borderRadius: 20,
    //borderWidth: 0,
    borderColor: "black",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "black",
  },
  name: {
    flex: 1,
    marginRight: 20,
    //justifyContent: "center",
    //alignItems: "center",
  },
  description: {
    textAlign: "justify",
    fontSize: 16,
  },
  descriptionContainer: {
    flex: 2,
    justifyContent: "flex-start",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  dateContainer: {
    flex: 1,
    flexDirection: "row",
  },
  date: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "flex-start",
    fontSize: 15,
    // borderWidth: 1,
  },
  hour: {
    justifyContent: "flex-end",
    flex: 1,
    fontSize: 15,
  },
  
  phone: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "flex-start",
    alignSelf: 'center',
    fontSize: 15,
    // borderWidth: 1,
  },
  location: {
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: 'row-reverse',
  },
  phoneAndLocationContainer: {
    flex: 1,
    flexDirection: "row",
  },
  map: {alignSelf:"center" , textDecorationLine: 'underline' , fontSize: 15,},
  codigoContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
  },
  textCod: {
      fontSize: 18,
  },
  numCod: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttons: {
      //flex: 1,
      flexDirection: 'row',
      alignSelf: 'center',
      paddingBottom: 10,
  },
  btnEdit: {
    width: 130,
    height: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "black",
    justifyContent: "center",
    marginRight:5,
    backgroundColor: "#179F34",
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
  textCancel: {
    fontSize: 15,
    color: "black",
  },
  btnCancel: {
    width: 130,
    height: 35,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginLeft:5,
    borderColor: "black",
    justifyContent: "center",
    backgroundColor: "#E9EBED",
  },
  question: {
    fontWeight: "700",
    fontSize: 18,
    margin: 20,
    textAlign: 'center'
  },
  text: {
    fontStyle: 'italic',
    fontSize: 12,
    margin: 20,
    textAlign: 'justify'
  }
});
