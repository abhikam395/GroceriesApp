import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {PRIMARY} from './../assets/commoncolors';

export default class SearchComponent extends Component {
  render() {
    return (
      <View style={styles.searchbar}>
        <Icon name="search" style={styles.icon} />
        <TextInput placeholder="Search Store" style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  input: {
    width: '100%',
    marginLeft: 10,
  },
  icon: {
    fontSize: 16,
  },
});
