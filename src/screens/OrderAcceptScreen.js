import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {PRIMARY, WHITE} from '../assets/commoncolors';
import { ACTIONS } from '../utils/cartActions';
import icon from './../assets/images/orderaccepted.png';

export default class OrderAcceptScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>Your Order has been accepted</Text>
        <Text style={styles.subTitle}>
          Your items has been placed and is on it's way to being processed
        </Text>
        <TouchableOpacity
          style={styles.tryAgainButton}
          onPress={() => this.props.changeAction(null)}>
          <Text style={styles.tryAgainButtonLabel}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backHomButton}
          onPress={() => this.props.changeAction(null)}>
          <Text style={styles.backButtonLabel}>Back to home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  icon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 150,
  },
  title: {
    fontSize: 25,
    width: '80%',
    textAlign: 'center',
    marginTop: 40,
  },
  subTitle: {
    width: '80%',
    textAlign: 'center',
    marginTop: 20,
    color: 'grey',
  },
  tryAgainButton: {
    backgroundColor: PRIMARY,
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    borderRadius: 10,
  },
  backHomButton: {
    height: 40,
    marginTop: 30,
  },
  tryAgainButtonLabel: {
    fontSize: 16,
    color: WHITE,
  },
  backButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
});
