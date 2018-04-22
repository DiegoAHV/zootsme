import React, { Component } from 'react';
// esto es pq JSX usa React. blah blah para traducir
//las etiketas de los componennts
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import CardSection from './CardSection'

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}
export {Card};