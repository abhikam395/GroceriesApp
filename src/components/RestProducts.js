import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {PRIMARY} from './../assets/commoncolors';
import ProductComponent from './ProductComponent';

export default class RestProduct extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {id: '1', name: 'Organic Bananas', quantity: '7pcs', price: '$4.55'},
        {id: '2', name: 'Red Apple', quantity: '7pcs', price: '$4.55'},
        {id: '3', name: 'Bell Pepper Red', quantity: '7pcs', price: '$4.55'},
        {id: '4', name: 'Ginger', quantity: '7pcs', price: '$4.55'},
      ],
    };
  }

  renderProduct(product) {
    return (
      <ProductComponent product={product} navigation={this.props.navigation} />
    );
  }

  render() {
    let {products} = this.state;
    return (
      <SafeAreaView>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => this.renderProduct(item)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{marginTop: 20}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});
