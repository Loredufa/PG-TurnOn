import * as React from 'react';
import { Text, Button, View , Modal , StyleSheet } from 'react-native';
import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Suppliers from '../Suppliers/Suppliers';
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function PickerModal({items , title , onClose , onSelect , visible}) {

const [sportSelected, setSport] = React.useState("Otros");

  function onChange(itemValue) {
    setSport(() => {
      const newInput = itemValue;
      return newInput;
    });
  }

  return (
    <Modal animated transparent animationType="fade" visible={visible}>
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity  onPress={onClose} style={{marginLeft: 10}}
                    >
                    <MaterialCommunityIcons 
                    name={"close-outline"}
                    size={30}
                    color={'red'}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity  onPress={() => onSelect(sportSelected)} style={{marginRight: 10}}
                    >
                    <MaterialCommunityIcons 
                    name={"checkmark-outline"}
                    size={30}
                    color={'#179F34'}/>
                    </TouchableOpacity>
                </View>
                <Picker
                selectedValue={sportSelected}
                onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
                >
                    {items.map ( (item,i) => <Picker.Item  key={i} value={item} label={item} />)}
                </Picker>
            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    pickerContainer: {
        height: '35%',
        width:'100%',
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    header: {
        height: '20%',
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    title: {
        fontSize: 17
    }
})