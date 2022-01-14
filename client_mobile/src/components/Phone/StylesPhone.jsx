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
    input: {
      width: 280,
      height: 40,
  
      marginTop: 15,
  
      borderRadius: 20,
      borderWidth: 1,
  
      backgroundColor: "white",
  
      paddingLeft: 10,
    },
    question: {
      fontWeight: 700,
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
