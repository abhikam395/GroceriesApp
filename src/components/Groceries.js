import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {PRIMARY} from '../assets/commoncolors';
import GroceryComponent from './GroceryComponent';

export default class Groceries extends Component {
  constructor() {
    super();
    this.state = {
      groceries: [
        {id: 1, name: 'Pulses'},
        {id: 2, name: 'Rices'},
        {id: 3, name: 'Milk'},
        {id: 4, name: 'Ice cream'},
      ],
    };
  }

  renderGrocery(grocery) {
    return (
      <GroceryComponent grocery={grocery} navigation={this.props.navigation} />
    );
  }

  render() {
    let {groceries} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Groceries</Text>
          <TouchableOpacity>
            <Text style={styles.sellAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.list}
          data={groceries}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => this.renderGrocery(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    minHeight: 130,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  sellAll: {
    color: PRIMARY,
  },
  list: {
    // width: '100%',
  }
});
