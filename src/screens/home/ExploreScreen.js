import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';

import SearchComponent from './../../components/SearchComponent';
import CategoryComponent from './../../components/CategoryComponent';

export default class ExploreScreen extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {id: 1, name: 'Frash Fruits \n& Vegetable'},
        {id: 2, name: 'Cooking Oil \n& Ghee'},
        {id: 3, name: 'Meat & Fish'},
        {id: 4, name: 'Bakery & Snacks'},
        {id: 5, name: 'Dairy & Eggs'},
        {id: 6, name: 'Beverages'},
        {id: 7, name: 'Frash Fruits \n& Vegetable'},
      ],
    };
  }

  renderCategory(category) {
    return <CategoryComponent category={category} />;
  }

  render() {
    let {categories} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          nestedScrollEnabled={true}
          style={styles.list}
          data={categories}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => this.renderCategory(item)}
          keyExtractor={(category) => category.id.toString()}
          numColumns={2}
          ListHeaderComponent={
            <>
              <Text style={styles.title}>Find Products</Text>
              <SearchComponent />
            </>
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
  },
  list: {
    height: '100%',
  },
});
