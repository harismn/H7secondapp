import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import styles from './style'
import Foto from '../../asets'

export default class Swipe4 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.image}
            source={Foto.swipe4}
            />
            <Text style={styles.text}>Dengan banyaknya vocabulary</Text>
            <Text style={styles.text}>yang Anda kuasai.</Text>
            <Text style={styles.text}>maka akan semakin </Text>
            <Text style={styles.text}>mudah untuk memahaminya</Text>
            </View>
        );
    }
}
