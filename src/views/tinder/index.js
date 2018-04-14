/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Swiper from 'react-native-deck-swiper'
import Card1 from '../tinder/card1'
import Card2 from  '../tinder/card2'
import Card3 from '../tinder/card3'
import Card4 from '../tinder/card4'
import Card5 from '../tinder/card5'
import Card6 from '../tinder/card6'
import Card7 from '../tinder/card7'

const card1 = <Card1 />
const card2 = <Card2 />
const card3 = <Card3 />
const card4 = <Card4 />
const card5 = <Card5 />
const card6 = <Card6 />
const card7 = <Card7 />


export default class Tinder extends Component {
    constructor (props) {
        super(props)
        this.state = {
          cards: ['1', '2', '3', '4','5','6','7'],
          swipedAllCards: false,
          swipeDirection: '',
          isSwipingBack: false,
          cardIndex: 0,
          cardCompoonent: {
              1: card1,
              2: card2,
              3: card3,
              4: card4,
              5: card5,
              6: card6,
              7: card7,
          }
        }
      }
      renderCard = card => {
        return (
          <View style={styles.card}>
            {this.state.cardCompoonent[card]}
          </View>
        )
      };
    
      onSwipedAllCards = () => {
        this.setState({
          swipedAllCards: true
        })
      };
    
      swipeBack = () => {
        if (!this.state.isSwipingBack) {
          this.setIsSwipingBack(true, () => {
            this.swiper.swipeBack(() => {
              this.setIsSwipingBack(false)
            })
          })
        }
      };
    
      setIsSwipingBack = (isSwipingBack, cb) => {
        this.setState(
          {
            isSwipingBack: isSwipingBack
          },
          cb
        )
      };
    
      swipeLeft = () => {
        this.swiper.swipeLeft()
      };
    
      render () {
        return (
          <View style={styles.container}>
            <Swiper
              ref={swiper => {
                this.swiper = swiper
              }}
              backgroundColor="red"
              onSwiped={this.onSwiped}
              // onTapCard={this.swipeLeft}
              cards={this.state.cards}
              cardIndex={this.state.cardIndex}
              cardVerticalMargin={80}
              renderCard={this.renderCard}
              // onSwipedAll={this.onSwipedAllCards}
              stackSize={0}
              stackSeparation={12}
              overlayLabels={{
              }}
              animateOverlayLabelsOpacity
              animateCardOpacity
              disableTopSwipe
              disableBottomSwipe
              verticalSwipe={false}
            >
              <Button onPress={this.swipeLeft} title='Memorize your Vocabularies' />
            </Swiper>
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FF9500'
      },
      card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'red',
        justifyContent: 'center',
        backgroundColor: 'white'
      },
      text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
      },
      done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
      }
    })