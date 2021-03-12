import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {WHITE} from '../../assets/commoncolors';
import SearchComponent from './../../components/SearchComponent';
import OffersComponent from './../../components/OffersComponent';
import ExclusiveOffers from './../../components/ExclusiveOffers';
import BestSelling from './../../components/BestSelling';
import RestProducts from './../../components/RestProducts';

export default class ShopScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchComponent />
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          ListHeaderComponent={
            <>
              <OffersComponent />
              <ExclusiveOffers navigation={this.props.navigation} />
              <BestSelling navigation={this.props.navigation} />
            </>
          }
          ListEmptyComponent={<RestProducts />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: WHITE,
  },
  scrollView: {
    marginVertical: 10,
  },
});
