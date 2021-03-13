import React, {Component} from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import image from './../assets/images/apple.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PRIMARY} from './../assets/commoncolors';

export default class CartItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  addQuantity() {
    let {product} = this.state;
    this.setState(Object.assign({}, product, {quantity: ++product.quantity}));
  }

  reduceQuantity() {
    let {product} = this.state;
    if (product.quantity > 1) {
      this.setState(Object.assign({}, product, {quantity: --product.quantity}));
    }
  }

  totalPrice(quantity, price) {
    return (quantity * price).toFixed(2);
  }

  render() {
    let {id, name, label, price, quantity} = this.props.product;
    return (
      <>
        <View style={styles.product}>
          <Image source={image} style={styles.image} />
          <View style={styles.productContainer}>
            <TouchableOpacity
              onPress={() => this.props.removeProduct(id)}
              style={styles.cancelIcon}>
              <MaterialIcons name="clear" size={22} />
            </TouchableOpacity>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.reduceQuantity()}>
                <AntDesign
                  name="minus"
                  style={styles.icon}
                  color={quantity === 1 ? 'grey' : PRIMARY}
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => this.addQuantity()}>
                <AntDesign
                  name="plus"
                  style={Object.assign({}, styles.icon, {color: PRIMARY})}
                />
              </TouchableOpacity>

              <Text style={styles.price}>
                $ {this.totalPrice(quantity, price)}
              </Text>
            </View>
          </View>
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
    height: 170,
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
    position: 'absolute',
    right: 0,
    color: 'grey',
    height: 30,
    width: 30,
    zIndex: 1,
  },
  price: {
    marginLeft: 'auto',
    color: 'black',
    fontSize: 14,
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
