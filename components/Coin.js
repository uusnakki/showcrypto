import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Left, Right, Body, Text, Thumbnail, Spinner, View } from 'native-base';
import { LineChart } from 'react-native-svg-charts';
import { PropTypes } from 'prop-types';

const Coin = () => {
 
 
  return(

    <CardItem>
    <Left>
      <Thumbnail source={{uri: `https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/128/color/${baseAsset}.png`}} />
      <Body>
        <Text>{baseAsset.toUpperCase()}/{quoteAsset.toUpperCase()}</Text>
        <Text note>{interval}</Text>
      </Body>
    </Left>
  </CardItem>
  ) 
  
     
  }

   

    
export default Coin;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 75,
  },
  chart: {
    height: 75,
  },
  priceUp: {
    color: 'rgb(0,153,51)',
  },
  priceDown: {
    color: 'rgb(204,51,51)',
  },
});
