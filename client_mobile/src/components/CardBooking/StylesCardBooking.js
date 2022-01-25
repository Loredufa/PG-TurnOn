import {
    StyleSheet,
  } from "react-native";
  
  
export const styles = StyleSheet.create({
    info: {
        flex: 1,
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
    date: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
       
    },
    ref: {
        flex:1,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
    },
    text: {
        color: '#2A2D34',
    }
  });