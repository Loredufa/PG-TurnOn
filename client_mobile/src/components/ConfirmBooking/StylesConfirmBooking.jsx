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
    info: {
        flex:5,
        padding: 10
    },
    title: {
        flex:1,
        fontSize:18,
        fontWeight: '500',
        padding: 10,
        alignSelf: 'center'
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
        fontSize: 12,
        fontStyle: 'italic',
        paddingTop: 5,
        paddingBottom: 5
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
})