import {
    StyleSheet,
  } from "react-native";
  
export 
const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  imgContainer: {
    flex: 1,
  },
  container: {
      alignItems: "center",
      flex:2,
  },
  button: {
      backgroundColor: "#179F34",
      marginTop: 30,
      width: 130,
      height: 35,
      alignItems: "center",
      borderRadius: 20,
      borderColor: "black",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 15,
      color: "white",
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
    error: {color:'red', marginTop:5},
    question: {
      fontWeight: "700",
      fontSize: 15,
      marginTop: 5,
    },
    welcome: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    screen: {
      flex:1,
  },
});
