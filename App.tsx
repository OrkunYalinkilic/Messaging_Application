import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
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
    image: ''
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

  resimYukle = async () => {
    let image = await firebase.storage().ref('imagern.jpg').getDownloadURL();
    console.log(image);
    this.setState({ image: image });
  }

  render() {
    debugger;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >

        <Image
          style={{ width: '80%', height: '40%', borderRadius: 8 }}
          source={{ uri: this.state.image }}
        />

        <TouchableOpacity onPress={() => this.resimYukle()} style={{ width: '80%' }}>
          <View style={{ alignItems: 'center', backgroundColor: '#FF655B', width: '100%', padding: 15, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 14 }}>Resim Yükle</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
});
