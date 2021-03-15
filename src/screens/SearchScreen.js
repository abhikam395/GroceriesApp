import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import {PRIMARY} from './../assets/commoncolors';
import ProductComponent from './../components/ProductComponent';

export default class ExclusiveOffers extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {id: 1, name: 'Organic Bananas', quantity: '7pcs', price: '$4.55'},
        {id: 2, name: 'Red Apple', quantity: '7pcs', price: '$4.55'},
        {id: 3, name: 'Bell Pepper Red', quantity: '7pcs', price: '$4.55'},
        {id: 4, name: 'Ginger', quantity: '7pcs', price: '$4.55'},
        {id: 5, name: 'Organic Bananas', quantity: '7pcs', price: '$4.55'},
        {id: 6, name: 'Red Apple', quantity: '7pcs', price: '$4.55'},
        {id: 7, name: 'Bell Pepper Red', quantity: '7pcs', price: '$4.55'},
        {id: 8, name: 'Ginger', quantity: '7pcs', price: '$4.55'},
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
      <SafeAreaView style={styles.container}>
        <FlatList
          columnWrapperStyle={styles.columnWrapperStyle}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => this.renderProduct(item)}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginLeft: 'auto',
    fontSize: 10,
  },
  seeAllLabel: {
    fontSize: 14,
    color: PRIMARY,
    fontWeight: 'bold',
  },
  contentContainerStyle: {justifyContent: 'space-evenly', paddingBottom: 100},
  columnWrapperStyle: {
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
