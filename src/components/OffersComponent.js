import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { PRIMARY } from '../assets/commoncolors';

export default class OffersComponent extends Component {
  render() {
    return <View style={styles.viewpager}></View>;
  }
}

const styles = StyleSheet.create({
  viewpager: {
    marginTop: 20,
    height: 150,
    backgroundColor: PRIMARY,
  },
  image: {
    resizeMode: 'cover',
    height: 150,
    width: '100%',
  },
});
