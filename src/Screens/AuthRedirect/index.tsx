import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

interface Props {
    navigation: any,
}

export default class Index extends Component<Props>{

    componentDidMount() {

        const user = firebase.auth().currentUser;
        if (user) {
            console.log(user);
            this.props.navigation.navigate('App');
        }
        else {
            this.props.navigation.navigate('Auth');
        }
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}

