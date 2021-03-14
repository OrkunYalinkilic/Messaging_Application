import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, TextInput, StyleSheet } from 'react-native';
import Message from '../../../Components/Rooms/Message';

export default class index extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("name")
        }
    }

    renderItem = ({ item, index }) => {
        return <Message item={item} index={index} />
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <FlatList
                    data={['a', 'b', 'c', 'd', 'e']}
                    renderItem={this.renderItem}
                    style={style.flatlist} />

                <View style={style.input_area}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={style.input}
                            placeholder={"Writing..."}
                        />
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    flatlist: {
        flex: 1,
        padding: 15,
        backgroundColor: '#F7F9FA'
    },
    input_area: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 15,

    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        height: 40,
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        color: 'black'
    }
});
