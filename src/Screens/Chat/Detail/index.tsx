import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, TextInput, StyleSheet } from 'react-native';
import Message from '../../../Components/Rooms/Message';
import io from 'socket.io-client/dist/socket.io';
import { MessageModel } from '../../../Model/messagemodel';
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from 'firebase';

interface Props {
    navigation: any
}

const connectionConfig = {
    jsonp: false,
    reconnection: true,
    reconnectionDelay: 100,
    reconnectionAttempts: 1000,
    transports: ['websocket'],
};

export default class index extends Component<Props> {

    state = {
        messages: [new MessageModel()],
        text: '',
        connectedUserCount: 0,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("name")
        }
    }

    componentDidMount() {
        const socket = io.connect("http://192.168.1.60:5500", connectionConfig);

        socket.on('connect', function () {
            console.log('socket baglandi');
        });

        const roomId = this.props.navigation.getParam("id");

        firebase.database()
            .ref(`messages/${roomId}`)
            .on('value', snapshot => {
                var messages = [new MessageModel()];
                snapshot.forEach((item) => {
                    messages.push(
                        new MessageModel(item.val().roomId, item.val().text, item.val().userName, item.val().userId, item.key)
                    )
                })

                this.setState({ messages });
                console.log(messages);
            });
    }

    renderItem = ({ item, index }) => {
        return <Message item={item} index={index} />
    }

    handleSend = () => {
        const { text } = this.state;
        const roomId = this.props.navigation.getParam("id");

        const user = firebase.auth().currentUser;
        const userId = user?.uid;
        const userName = user?.displayName;
        var database = firebase.database().ref(`messages/${roomId}`);

        database.push({
            roomId,
            text,
            userId,
            userName
        }).then((result) => {
            this.setState({ text: '' })
        }).catch((error) => console.log(error));
            
    }

    render() {
        const { text, messages, connectedUserCount } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={['a', 'b', 'c', 'd', 'e', 'f', 'g']}
                    renderItem={this.renderItem}
                    style={style.flatlist} />

                <View style={style.input_area}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            value={text}
                            onChangeText={(text) => this.setState({ text })}
                            style={style.input}
                            placeholder={"Writing..."}
                        />
                        <TouchableOpacity onPress={this.handleSend}>
                            <Icon style={{ marginLeft: 10 }} color={"#30B485"} name={"paper-plane"} size={25} />
                        </TouchableOpacity>
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