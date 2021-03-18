import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Navigator from './../components/HomeNavigatorComponent';
import OrderFailedComponent from '../components/OrderFailedComponent';

import {connect} from 'react-redux';

const mapStateToProps = function (state) {
  return {
    user: state.authReducer,
  };
};

class HomeScreen extends Component {
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

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    zIndex: 1,
    position: 'relative',
  },
});
