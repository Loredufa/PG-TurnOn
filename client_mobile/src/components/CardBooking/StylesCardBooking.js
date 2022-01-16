import {
    StyleSheet,
  } from "react-native";
  
  
export const styles = StyleSheet.create({
    info: {
        flex: 1,
        flexDirection: "column",
        //alignItems: "flex-start",
    },
    name: {
        alignSelf: 'center',
        fontSize:15,
        fontWeight: "bold",
        marginBottom:10,
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    ref: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
    },
    text: {
        color: '#2A2D34',
    }
  });