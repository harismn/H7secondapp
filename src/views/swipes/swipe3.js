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

export default class Swipe3 extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.image}
            source={Foto.swipe3}
            />
            <Text style={styles.text}>Untuk belajar suatau bahasa baru</Text>
            <Text style={styles.text}> anda mperlu menghapalkan beberapa</Text>
            <Text style={styles.text}>Vocabualary yang baru</Text>
            </View>
        );
    }
}
