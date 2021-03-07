import React, { Component } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
//import firebase from 'firebase';
//import Icon from 'react-native-vector-icons/FontAwesome5';
//import database from '@react-native-firebase/database';
//import RoomItem from "../../Components/Rooms/RoomItem";

interface Props {
    navigation: any
}


export default class index extends Component<Props> {

    render() {
        return <SafeAreaView style={{ flex: 1 }}>

            <TouchableOpacity
                onPress={() => {this.props.navigation.navigate('ChatRoomCreate'); }}
                style={style.button}>
                <Text style={style.button_text}>Create Chat Room</Text>
            </TouchableOpacity>

        </SafeAreaView>
    }
}


const style = StyleSheet.create({
    button: {
        backgroundColor: '#7165E3',
        padding: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        textAlign: 'center'
    }

})
