import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import styles from './style'

export default class Selector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: false,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
        }      
        this.onPressTitle = this.onPressTitle.bind(this);        
    }

    onPressTitle(text) {
        if (text === 'pemula') {
            this.setState({
                first: !this.state.first,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
            })
        } else if (text === 'dasar') {
            this.setState({
                second: !this.state.second,
                first: false,
                third: false,
                fourth: false,
                fifth: false,
            })
        } else if (text === 'rata-rata') {
            this.setState({
                third: !this.state.third,
                second: false,
                first: false,
                fourth: false,
                fifth: false,
            })
        } else if (text === 'diatas') {
            this.setState({
                fourth: !this.state.fourth,
                second: false,
                third: false,
                first: false,
                fifth: false,
            })
        } else {
            this.setState({
                fifth: !this.state.fifth,
                second: false,
                third: false,
                fourth: false,
                first: false,
            })
        }
    }

    render () {
        const { first, second, third, fourth, fifth } = this.state;
        return (
            <TouchableOpacity onPress={()=> {}}>
                <Text style={first ? styles.focus : styles.blur} onPress={() => this.onPressTitle('pemula')}>Pemula</Text>
                <Text style={second ? styles.focus : styles.blur} onPress={() => this.onPressTitle('dasar')}>Dasar</Text>
                <Text style={third ? styles.focus : styles.blur} onPress={() => this.onPressTitle('rata-rata')}>Rata-Rata</Text>
                <Text style={fourth ? styles.focus : styles.blur} onPress={() => this.onPressTitle('diatas')}>Di atas rata-rata</Text>
                <Text style={fifth ? styles.focus : styles.blur} onPress={() => this.onPressTitle('lanjutan')}>Lanjutan</Text>
            </TouchableOpacity>
        )
    }
}