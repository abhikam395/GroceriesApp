import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
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
        />
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
});
