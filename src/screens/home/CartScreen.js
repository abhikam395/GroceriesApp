import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {PRIMARY, WHITE} from '../../assets/commoncolors';
import CartItemComponent from './../../components/CartItemComponent';

import CheckoutScreen from './../CheckOutScreen';

export default class CartScreen extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 1,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
          quantity: 1,
        },
        {
          id: 2,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
          quantity: 1,
        },
        {
          id: 3,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
          quantity: 1,
        },
        {
          id: 4,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
          quantity: 1,
        },
        {
          id: 5,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
          quantity: 1,
        },
        {
          id: 6,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
          quantity: 1,
        },
        {id: 7, name: 'Ginger', label: '1kg, Price', price: '4.2', quantity: 1},
      ],
      checkout: false,
    };
    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct(id) {
    let {list} = this.state;
    this.setState({list: list.filter((item) => item.id !== id)});
    // ToastAndroid.showWithGravity('Item removed from Cart', 1, ToastAndroid.TOP);
  }

  checkout() {
    this.setState({checkout: true});
  }

  /**
   * hide checkout compoent
   * reset list
   */
  hideCheckoutComponent() {
    this.setState({checkout: false});
  }

  render() {
    let {list, checkout} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>My Cart</Text>
          <View style={styles.line} />
          {list.length === 0 && <Text>Cart Empty</Text>}
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            data={list}
            renderItem={({item}) => (
              <CartItemComponent
                product={item}
                removeProduct={this.removeProduct}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{paddingBottom: 90}}
          />
          {list.length !== 0 && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.checkout()}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          )}
        </View>
        {checkout && (
          <CheckoutScreen hide={() => this.hideCheckoutComponent()} />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
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
  list: {
    width: '100%',
  },
  button: {
    height: 57,
    backgroundColor: PRIMARY,
    width: '90%',
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: WHITE,
    fontWeight: '700',
    fontSize: 16,
  },
});
