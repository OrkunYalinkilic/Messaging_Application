import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from "./AppContainer";
import firebase from 'firebase';

interface IProps { }
interface IState { }

export default class App extends React.Component<IProps, IState> {

  constructor(p: IProps, s: IState) {
    super(p, s);
  }


  componentDidMount = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyAykKajsO9SOrqon3u9ofo6aI9vu3AXA-4",
      authDomain: "rnapp-2ff0a.firebaseapp.com",
      projectId: "rnapp-2ff0a",
      storageBucket: "rnapp-2ff0a.appspot.com",
      messagingSenderId: "403623250965",
      appId: "1:403623250965:web:90a37cc8e5e760c4b8521c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        //giriş yapıldı
      }
      else {
        //giriş yapılmadı
      }
    })

  }

  
  render() {
    debugger;
    return (<AppContainer />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
