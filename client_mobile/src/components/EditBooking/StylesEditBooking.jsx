import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    detail: {
        height: '50%',
        width: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    hourItem: {
        fontSize: 15,
      },
    info: {
        flex:5
    },
    title: {
        flex:1,
        fontSize:18,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 5
    },
    title1: {
      flex:1,
      fontSize:18,
      fontWeight: '500',
      paddingTop: 5,
      textAlign: 'center',
  },
    column: {
        flex:1,
        flexDirection: 'row',
        marginBottom: 5,
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        alignItems:'center',
        marginLeft: 5,
        marginRight: 5
    },
    text: {
        textAlign: 'justify',
        marginLeft: 5,
        marginRight: 5,
    },
    buttons: {
        flex:1,
        flexDirection: "row",
        alignItems: 'center'
    },
    btnEdit: {
        //width: 130,
        //height: 35,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: "black",
        justifyContent: "center",
        marginRight: 5,
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
        //width: 130,
        //height: 35,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        marginLeft: 5,
        borderColor: "black",
        justifyContent: "center",
        backgroundColor: "#E9EBED",
      },
      optionsContainer: {
        flex: 8,
        flexDirection: "row",
        //margin: 20,
        //justifyContent: "space-between",
        alignItems: 'center'
      },
})