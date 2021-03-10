import React, {Component} from 'react';

import {Text, View, StatusBar, StyleSheet, Image} from 'react-native';
import {PRIMARY, WHITE} from './../assets/commoncolors';

import icon from './../assets/images/appicon.png';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {navigation} = this.props;

    setTimeout(function () {
      navigation.navigate('Login');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
        <Image source={icon} style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    height: 100,
    width: 250,
    resizeMode: 'contain',
  },
});
