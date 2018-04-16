import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './style'
import Foto from '../../asets'

export default class Swipe1 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.image}
            source={Foto.swipe1}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text}>Mustahil untuk tahu 100%</Text>
                <Text style={styles.text}>tentang bahasa inggris.</Text>
                <Text style={styles.text}>Selalu ada kata baru </Text>
                <Text style={styles.text}>yang harus dipelajari</Text>
            </View>
            </View>
        );
    }
}

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#FF9500',
        padding:  50
    },
    textUp: {
        fontSize : 20,
        fontWeight: 'bold',
        color: 'white',
        // padding: 20,
    },
    newStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 30,
    },
})

export default styles;
*/