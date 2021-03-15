import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class SearchComponent extends Component {
  constructor() {
    super();
    this.changeQuery = this.changeQuery.bind(this);
  }

  changeQuery(e) {
    this.props.changeQuery(e);
  }

  render() {
    let {query} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Icon name="search" style={styles.icon} />
          <TextInput
            placeholder="Search Store"
            style={styles.input}
            onChangeText={this.changeQuery}
          />
        </View>
        {query !== undefined && query.length !== 0 && (
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => this.props.filterToggle()}>
            <Icon name="filter" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    fontSize: 18,
    alignSelf: 'center',
    zIndex: 10,
  },
  filterButton: {
    margin: 'auto',
    marginHorizontal: 20,
    zIndex: 10,
  },
});
