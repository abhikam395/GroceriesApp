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

import {PRIMARY} from './../assets/commoncolors';
import ProductComponent from './../components/ProductComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilterComponent from '../components/FilterComponent';

export default class ProductsScreen extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {id: 1, name: 'Organic Bananas', quantity: '7pcs', price: '$4.55'},
        {id: 2, name: 'Red Apple', quantity: '7pcs', price: '$4.55'},
        {id: 3, name: 'Bell Pepper Red', quantity: '7pcs', price: '$4.55'},
        {id: 4, name: 'Ginger', quantity: '7pcs', price: '$4.55'},
      ],
      openFilter: false,
    };
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter() {
    console.log(2);
    let {openFilter} = this.state;
    this.setState({openFilter: !openFilter});
  }

  renderProduct(product) {
    return (
      <ProductComponent product={product} navigation={this.props.navigation} />
    );
  }

  render() {
    let {products, openFilter} = this.state;
    let {route, navigation} = this.props;
    let {title} = route.params;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <MaterialIcons name="keyboard-arrow-left" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
              style={{marginLeft: 'auto'}}
              onPress={() => this.toggleFilter()}>
              <MaterialIcons name="filter-list" style={styles.filterIcon} />
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={({item}) => this.renderProduct(item)}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.product}
          />
        </View>
        {openFilter && <FilterComponent toggle={this.toggleFilter} />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  icon: {
    fontSize: 30,
  },
  product: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  list: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  filterIcon: {
    fontSize: 26,
    textAlign: 'right',
  },
});
