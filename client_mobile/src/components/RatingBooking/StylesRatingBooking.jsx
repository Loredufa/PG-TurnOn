import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    detail: {
        height: '30%',
        width: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    title: {
        flex:1,
        fontSize:18,
        fontWeight: '500',
        paddingTop: 5,
        textAlign: 'center',
    },
    ratingContainer: {
      flex:1,
      flexDirection: 'row',
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
      },
})