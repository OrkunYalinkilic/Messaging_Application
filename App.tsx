import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AppContainer from "./AppContainer";
import firebase from 'firebase';

const { width, height } = Dimensions.get('window');

interface IProps { }
interface IState { }

export default class App extends React.Component<IProps, IState> {

  constructor(p: IProps, s: IState) {
    super(p, s);
  }

  state = {
    text: ''
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
    firebase.initializeApp(firebaseConfig);
  }

  veriyaz = () => {
    firebase.database().ref('veri').set(this.state.text)
      .then(() => {
        console.log("Veri Yazıldı");
      })
  }

  verioku = () => {
    firebase.database().ref('veri').once('value', (snap) => { // once = çağırıldığında çalışır.
      console.log(snap.val());
    });

    /* firebase.database().ref('veri').on('value',(snap)=>{ // on = database'de o veri değişir değişmez çalışır.(?)
       console.log(snap.val());
     });*/
  }

  render() {
    debugger;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >

        <TextInput
          placeholder="Veri"
          style={{ marginTop: 10, width: '80%', padding: 15, fontSize: 14, backgroundColor: 'lightgray' }}
          underlineColorAndroid='transparent'
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
          placeholderTextColor='gray'
        />

        <TouchableOpacity onPress={() => this.veriyaz()} style={{ width: '80%' }}>
          <View style={{ alignItems: 'center', backgroundColor: '#FF655B', width: '100%', padding: 15, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 14 }}>Veri Yaz</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.verioku()} style={{ width: '80%' }}>
          <View style={{ alignItems: 'center', backgroundColor: '#FF655B', width: '100%', padding: 15, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 14 }}>Veri Oku</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
