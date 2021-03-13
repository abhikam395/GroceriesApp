/* eslint-disable react-native/no-inline-styles */
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
import FavouriteItemComponent from '../../components/FavouriteItemComponent';

export default class FavouriteScreen extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 1,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
        },
        {
          id: 2,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
        },
        {
          id: 3,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
        },
        {
          id: 4,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
        },
        {
          id: 5,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
        },
        {
          id: 6,
          name: 'Bell Pepper Red',
          label: '1kg, Price',
          price: '4.2',
        },
        {id: 7, name: 'Ginger', label: '1kg, Price', price: '4.2'},
      ],
    };
  }

  addItemToCart() {
    ToastAndroid.showWithGravity('Items Added to cart', 1, ToastAndroid.TOP);
  }

  render() {
    let {list} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Favourite</Text>
        <View style={styles.line} />
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          data={list}
          renderItem={({item}) => <FavouriteItemComponent product={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{paddingBottom: 150}}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => this.addItemToCart()}>
          <Text style={styles.buttonText}>Add All To Cart</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
