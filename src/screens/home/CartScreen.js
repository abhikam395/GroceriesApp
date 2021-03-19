/* eslint-disable react-native/no-inline-styles */
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
import store from './../../../store';
import {add, remove} from './../../../store/actions/cartActions';

import {PRIMARY, WHITE} from '../../assets/commoncolors';
import {ACTIONS} from '../../utils/cartActions';
import OrderAcceptScreen from '../OrderAcceptScreen';
import CartItemComponent from './../../components/CartItemComponent';

import {
  getCartsItems,
  addToCart,
  removeItemCart,
} from './../../../apis/cartApis';

import CheckoutScreen from './../CheckOutScreen';

const mapPropsToState = function (state) {
  return {
    products: state.cartReducer.products,
  };
};

class CartScreen extends Component {
  constructor() {
    super();
    this.state = {
      actionType: null,
      list: [],
    };
    this.removeProduct = this.removeProduct.bind(this);
    this.changeAction = this.changeAction.bind(this);
  }

  async componentDidMount() {
    try {
      let response = await getCartsItems(1);
      store.dispatch(add(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  removeProduct(id) {
    let {list} = this.state;
    this.setState({list: list.filter((item) => item.id !== id)});
    // ToastAndroid.showWithGravity('Item removed from Cart', 1, ToastAndroid.TOP);
  }

  checkout() {
    this.setState({actionType: ACTIONS.CHECKOUT});
  }

  changeAction(action) {
    this.setState({actionType: action});
  }

  /**
   * hide checkout compoent
   * reset list
   */
  hideCheckoutComponent() {
    this.setState({checkout: false});
  }

  render() {
    let {list, actionType} = this.state;
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
              <Text style={styles.buttonText}>CHECKOUT</Text>
            </TouchableOpacity>
          )}
        </View>
        {actionType === ACTIONS.CHECKOUT && (
          <CheckoutScreen changeAction={this.changeAction} />
        )}
        {actionType === ACTIONS.ORDERACCEPTED && (
          <OrderAcceptScreen changeAction={this.changeAction} />
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapPropsToState)(CartScreen);

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
