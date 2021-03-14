import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
//import PushNotification from "react-native-push-notification";
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import Route from "./src/Route";
import { Provider } from 'mobx-react';
import NavigationService from './src/Components/NavigationService'

export default class App extends React.Component {

  componentDidMount() {

  }

  render() {

    return <Route

      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}

    />
  }

}
