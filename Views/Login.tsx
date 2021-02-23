import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ICommon from '../common/interfaces/ICommon';

interface IProps extends ICommon{}
interface IProps {}
interface IState {}

export default class Login extends React.Component<IProps,IState> {

  constructor(p:IProps, s:IState){
    super(p,s);
  }
  
  render(){
    debugger;
    return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Home" onPress={()=>{
        this.props.navigation.navigate("Home");
      }}></Button>
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
