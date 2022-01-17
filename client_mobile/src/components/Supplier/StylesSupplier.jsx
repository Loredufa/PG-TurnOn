import {
    StyleSheet,
  } from "react-native";
  
export const styles = StyleSheet.create({
    img: {
      height: '90%',
      width: '40%',
      padding: 3,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      alignItems: 'center'
    },
    info: {
      flex: 1,
      flexDirection: "column",
      //alignItems: "flex-start",
    },
    name: {
        flex:1,
        alignSelf: 'center',
        marginTop:5,
        fontSize:18,
        fontWeight: "bold",
    },
    mail:{
        flex:1,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    containerRating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rating: {
      marginLeft: 5,
      fontWeight: '500',
    }
  });
  