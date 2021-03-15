import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';

import SearchComponent from './../components/SearchComponent';
export default class SearchScreen extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>
          <SearchComponent />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
  },
  list: {
    height: '100%',
  },
});
