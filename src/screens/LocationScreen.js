import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {PRIMARY, WHITE} from '../assets/commoncolors';
import icon from './../assets/images/locationimage.png';

export default class LocationScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.locationLabel}>Turn On your device location</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    marginTop: 70,
  },
  title: {
    fontSize: 24,
  },
  locationLabel: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 50,
    backgroundColor: PRIMARY,
    width: '70%',
  },
  buttonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
