import {
    StyleSheet,
  } from "react-native";
  
export const styles = StyleSheet.create({
    img: {
      height: '90%',
      width: '35%',
      padding: 3,
      borderRadius: 10,
      alignItems: 'center'
    },
    info: {
      flex: 2,
      flexDirection: "column",
      marginLeft: 5,
      //alignItems: "flex-start",
    },
    name: {
        flex:1,
        alignSelf: 'center',
        marginTop:5,
        fontSize:18,
        fontWeight: "bold",
    },
    sportText: {
      flex:1,
      marginLeft: 3, 
      marginRight: 3,
    },
    mail:{
        flex:1,
        alignSelf: 'center',
        marginLeft: 10,
    },
    containerRating: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    rating: {
      marginLeft: 5,
      paddingTop: 3,
      fontSize: 15,
      fontWeight: '500',
    }
  });
  