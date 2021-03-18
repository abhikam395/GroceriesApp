import React, {Component} from 'react';

import {View, StatusBar, StyleSheet, Image} from 'react-native';
import {PRIMARY} from './../assets/commoncolors';
import {getUser} from './../utils/authData';

import icon from './../assets/images/appicon.png';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  componentDidMount() {
    let {navigation} = this.props;

    this.timeout = setTimeout(async function () {
      let user = await getUser();
      if (user !== null) {
        navigation.replace('Home');
      } else {
        navigation.replace('OnBoard');
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
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
