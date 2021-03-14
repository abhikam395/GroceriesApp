import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PRIMARY} from '../../assets/commoncolors';

export default class CheckoutPaymentMethod extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Payment</Text>
        <FontAwesome
          name="cc-mastercard"
          style={Object.assign(
            {...styles.label},
            {color: PRIMARY, fontSize: 22},
          )}
        />
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
