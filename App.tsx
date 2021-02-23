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
    email: '',
    password: '',
    login: false
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
        console.log("Giriş Yapıldı");

      }
      else {
        console.log("Giriş Yapılmadı");

      }
    })
  }

  kayitol = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
  }

  giris = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password);
  }

  render() {
    debugger;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <TextInput
          placeholder="E-Mail Adresi"
          style={{ marginTop: 10, width: '80%', padding: 15, fontSize: 14, backgroundColor: 'lightgray' }}
          underlineColorAndroid='transparent'
          onChangeText={email => this.setState({ email: email })}
          value={this.state.email}
          placeholderTextColor='gray'
        />
        <TextInput
          placeholder="Şifre"
          style={{ marginTop: 10, width: '80%', padding: 15, fontSize: 14, backgroundColor: 'lightgray' }}
          underlineColorAndroid='transparent'
          onChangeText={password => this.setState({ password: password })}
          value={this.state.password}
          secureTextEntry
          placeholderTextColor='gray'
        />
        <TouchableOpacity onPress={() => this.kayitol()} style={{ width: '80%' }}>
          <View style={{ alignItems: 'center', backgroundColor: '#FF655B', width: '100%', padding: 15, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 14 }}>Kayıt Ol</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.giris()} style={{ width: '80%' }}>
          <View style={{ alignItems: 'center', backgroundColor: '#FF655B', width: '100%', padding: 15, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 14 }}>Giriş Yap</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
