import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';

import {PRIMARY} from './../assets/commoncolors';
import ProductComponent from './ProductComponent';
import {getExclusiveOffers} from './../../apis/productsApis';
import store from './../../store';
import {addExclusiveOffers} from './../../store/actions/productActions';

const mapPropsToState = function (state) {
  console.log(state);
  return {
    products: state.offersProductReducer.products,
  };
};

class ExclusiveOffers extends Component {
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

  async componentDidMount() {
    try {
      const response = getExclusiveOffers();
      const object = (await response).data;
      if (object.products.length) {
        store.dispatch(addExclusiveOffers(object.products));
      }
    } catch (error) {
      console.log(error);
    }
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
        <View style={styles.row}>
          <Text style={styles.title}>Exclusive Offer</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.seeAllLabel}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.list}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => this.renderProduct(item)}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapPropsToState)(ExclusiveOffers);

const styles = StyleSheet.create({
  row: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
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
});
