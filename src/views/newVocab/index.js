import React, { Component } from 'react'
import { 
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native'
import Ria from '../../asets'
import styles from './style'

export default class NewVocab extends Component{
    constructor(props){
        super(props);

    }
render() {
    return (
        <View style={styles.container}>
         <Image
            style={styles.image}
            source={Ria.foto3}
            />
            <Text style={styles.text}>Ayo pilih 8 kata baru
                </Text>
            <TouchableOpacity style={styles.button}
            onPress={console.log('masuk kok')}>
            <Text style={styles.textButton}>
                Pilih
                </Text>
                </TouchableOpacity> 
            </View>
    );
    }
}

