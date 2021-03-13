import React, {Component} from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import image from './../assets/images/apple.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class FavouriteItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    let {name, label, price} = this.state.product;
    return (
      <>
        <View style={styles.product}>
          <Image source={image} style={styles.image} />
          <View style={styles.productContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.label}>{label}</Text>
          </View>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity
            //   onPress={() => this.props.removeProduct(id)}
            style={styles.cancelIcon}>
            <MaterialIcons name="keyboard-arrow-right" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 20,
  },
  line: {
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
    width: '100%',
  },
  product: {
    height: 140,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  productContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    resizeMode: 'contain',
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    borderWidth: 1,
    padding: 7,
    borderRadius: 12,
    borderColor: 'lightgrey',
  },
  quantity: {
    marginHorizontal: 15,
  },
  cancelIcon: {
    color: 'grey',
    height: 30,
    width: 30,
    zIndex: 1,
    marginHorizontal: 5,
  },
  price: {
    marginLeft: 'auto',
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
  },
  label: {
    color: 'grey',
    margin: 2,
  },
});
