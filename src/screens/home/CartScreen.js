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
    };
    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct(id) {
    let {list} = this.state;
    this.setState({list: list.filter((item) => item.id !== id)});
    ToastAndroid.showWithGravity('Item removed from Cart', 1, ToastAndroid.TOP);
  }

  checkout() {
    ToastAndroid.showWithGravity('Checkout', 1, ToastAndroid.TOP);
  }

  render() {
    let {list} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Cart</Text>
        <View style={styles.line} />
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
        <TouchableOpacity style={styles.button} onPress={() => this.checkout()}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
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
