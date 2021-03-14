import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class CheckOutDeliveryItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Promo Code</Text>
        <Text style={styles.label}>Pick Discount</Text>
        <TouchableOpacity style={styles.arrowButton}>
          <MaterialIcons name="keyboard-arrow-right" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    opacity: 0.5,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: 'grey',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
  },
  label: {
    marginLeft: 'auto',
  },
  arrowIcon: {
    fontSize: 30,
  },
  arrowButton: {
    marginHorizontal: 10,
  },
  moreContainer: {
    height: 400,
  },
});
