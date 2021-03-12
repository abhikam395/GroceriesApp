import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import getRandomColor from '../utils/rendomColorPicker';
import pulsesImage from './../assets/images/pulses.png';

export default class GroceryComponent extends Component {
  render() {
    let color = getRandomColor();
    let {grocery} = this.props;
    return (
      <View style={Object.assign({}, styles.card, {backgroundColor: color})}>
        <Image source={pulsesImage} style={styles.image} />
        <Text style={styles.title}>{grocery.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: Dimensions.get('window').width - 150,
    marginRight: 20,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 10,
    color: 'grey',
  },
});
