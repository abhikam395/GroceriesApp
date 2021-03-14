import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Navigator from './../components/HomeNavigatorComponent';
import OrderFailedComponent from '../components/OrderFailedComponent';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  hideErrorScreen() {
    this.setState({error: false});
  }

  render() {
    let {error} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Navigator />
        {error && (
          <OrderFailedComponent navigateToHome={() => this.hideErrorScreen()} />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    zIndex: 1,
    position: 'relative',
  },
});
