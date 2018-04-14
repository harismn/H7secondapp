/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Selector from '../selector'
import styles from './style'

export default class Level extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: false,
            active: false,
            others: false,
        };
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        this.setState({isHidden: !this.state.isHidden})
    }

    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.textUp}>Pilih level bahasa </Text>
            <Text style={styles.textUp}>Inggrismu </Text>
            <Selector style={styles.newStyle}/>
            <TouchableOpacity style={styles.button}
                onPress={() => console.log('aku keluar nih')}>
                <Text> Berikutnya </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}