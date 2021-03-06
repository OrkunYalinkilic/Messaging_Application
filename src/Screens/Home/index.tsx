import React, { Component } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import database from '@react-native-firebase/database';
//import RoomItem from "../../Components/Rooms/RoomItem";

interface Props {
    navigation: any
}

function HamburgerLeft(a) {
    return <TouchableOpacity onPress={() => a.navigate('Home')} style={{ marginLeft: 15 }}><Icon color={"#ddd"} name={"plus"} size={25} /></TouchableOpacity>

}

function HamburgerRight(b) {
    return <TouchableOpacity onPress={() => b.navigate('Home')} style={{ marginRight: 15, padding: 5 }}><Icon color={"#ddd"} name={"sign-out-alt"} size={25} /></TouchableOpacity>

}


export default class index extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'HomeIndex',
            headerLeft: HamburgerLeft(navigation),
            headerRight: HamburgerRight(navigation)
        }
    };

    render() {
        return <SafeAreaView style={{ flex: 1 }}>
            <Text>orkunn</Text>
        </SafeAreaView>
    }
}
