import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ item, index }) => {
    return <View style={(index % 2 === 0) ? style.other : style.me} >
        <View style={[style.bubble, { backgroundColor: (index % 2 === 0) ? '#EAEAEA' : '#30B485' }]} >
            <Text style={{ fontSize:17,color:(index % 2 === 0) ? '#575757' : 'white'}} >Textttt</Text>
        </View>
    </View>
};

const style = StyleSheet.create({
    other: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',

    },
    me: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },
    bubble: {
        padding: 20,
        width: 150,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: 'lightblue'
    }
})


export default Message;
