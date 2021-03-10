import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { PRIMARY, WHITE } from '../assets/commoncolors';
import backgroundImage from './../assets/images/deliveryboy.png';

export default class OnBoardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={backgroundImage} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to our store</Text>
          <Text style={styles.subTitle}>
            Get your groceries in less than one hour
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  overlay: {
    position: 'absolute',
    top: '60%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: WHITE,
    letterSpacing: 4,
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 10,
    fontSize: 15,
    color: 'lightgrey',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    backgroundColor: PRIMARY,
    width: '70%',
    borderRadius: 20,
  },
  buttonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
