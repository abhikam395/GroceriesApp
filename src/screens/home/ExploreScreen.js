import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import SearchComponent from './../../components/SearchComponent';
import CategoryComponent from './../../components/CategoryComponent';
import SearchScreen from './../SearchScreen';

import FilterComponent from './../../components/FilterComponent';

export default class ExploreScreen extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {id: 1, name: 'Frash Fruits & Vegetable'},
        {id: 2, name: 'Cooking Oil & Ghee'},
        {id: 3, name: 'Meat & Fish'},
        {id: 4, name: 'Bakery & Snacks'},
        {id: 5, name: 'Dairy & Eggs'},
        {id: 6, name: 'Beverages'},
        {id: 7, name: 'Frash Fruits & Vegetable'},
      ],
      query: null,
      filterOpen: false,
    };
    this.changeQuery = this.changeQuery.bind(this);
    this.filterToggle = this.filterToggle.bind(this);
  }

  filterToggle() {
    let {filterOpen} = this.state;
    this.setState({filterOpen: !filterOpen});
  }

  changeQuery(query) {
    console.log(query);
    this.setState({query: query});
  }

  renderCategory(category) {
    return (
      <CategoryComponent
        category={category}
        navigation={this.props.navigation}
      />
    );
  }

  render() {
    let {categories, query, filterOpen} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          {query === null && (
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
                  <View style={styles.searchbar}>
                    <SearchComponent
                      changeQuery={this.changeQuery}
                      filterToggle={this.filterToggle}
                    />
                  </View>
                </>
              }
              columnWrapperStyle={styles.columnWrapperStyle}
            />
          )}
        </View>
        {filterOpen && <FilterComponent filterToggle={this.filterToggle} />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
  },
  list: {
    height: '100%',
    width: '100%',
  },
  searchbar: {
    marginBottom: 30,
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
