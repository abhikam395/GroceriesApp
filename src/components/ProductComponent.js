import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import image from './../assets/images/apple.png';
import Icon from 'react-native-vector-icons/AntDesign';

import {PRIMARY, WHITE} from './../assets/commoncolors';

export default class ProductComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {product, navigation} = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
        <View style={styles.card}>
          <Image style={styles.image} source={image} />
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.quantity}>{product.quantity}</Text>
          <View style={styles.row}>
            <Text>{product.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Icon name="plus" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    height: 250,
    minWidth: 170,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    justifyContent: 'center',
    marginRight: 10,
    flex: 1,
    width: '100%',
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 13,
    color: 'grey',
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  icon: {
    color: WHITE,
  },
});
