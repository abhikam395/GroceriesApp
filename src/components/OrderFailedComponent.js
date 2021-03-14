import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PRIMARY, WHITE} from '../assets/commoncolors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import icon from './../assets/images/orderfailed.png';

export default class OrderFailedComponent extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => this.props.hideError()}>
            <MaterialIcons name="clear" style={styles.clearIcon} />
          </TouchableOpacity>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.error}>Oops! Something when wrong</Text>
          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={() => this.props.hideError()}>
            <Text style={styles.tryAgainButtonLabel}>Please try again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backHomButton}
            onPress={() => this.props.hideError()}>
            <Text style={styles.backButtonLabel}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: WHITE,
    height: 'auto',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
  },
  icon: {
    width: 130,
    height: 130,
    marginTop: 20,
    resizeMode: 'contain',
  },
  error: {
    fontSize: 22,
    marginTop: 40,
    width: '80%',
    textAlign: 'center',
    lineHeight: 30,
  },
  tryAgainButton: {
    backgroundColor: PRIMARY,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
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
  clearButton: {
    alignSelf: 'flex-start',
    zIndex: 10,
  },
  clearIcon: {
    fontSize: 26,
  },
});
