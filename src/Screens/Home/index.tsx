import React, { Component } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import database from '@react-native-firebase';
import RoomItem from "../../Components/Rooms/RoomItem";
import { Room } from '../../Model/room';
import { string } from 'yup/lib/locale';

interface Props {
    navigation: any
}

export default class index extends Component<Props> {

    state = {
        rooms: [new Room()]
    }

    getData = () => {
        firebase.database()
            .ref('/rooms')
            .orderByChild('name')
            .on('value', snapshot => {
                snapshot.forEach(item => {
                    this.state.rooms.push(
                        new Room(item.val().name, item.val().userName, item.val().userId, item.key)
                    );
                })
            });

        this.state.rooms.forEach(i => {
            if (i.name === "" || i.name === null || i.name === undefined) this.state.rooms.splice(this.state.rooms.findIndex(a => a.id == i.id), 1);
        });

        console.log(this.state.rooms);
    };

    renderItem = ({ item }) => {
        return <RoomItem item={item} />
    }
    render() {

        const user = firebase.auth().currentUser;
        this.getData();

        return <SafeAreaView style={{ flex: 1 }}>

            <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('ChatRoomCreate'); }}
                style={style.button}>
                <Text style={style.button_text}>Create Chat Room</Text>
            </TouchableOpacity>

            <FlatList
                style={{ flex: 1, padding: 5 }}
                data={this.state.rooms}
                renderItem={this.renderItem}
            />
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
