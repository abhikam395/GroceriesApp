import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import CheckBox from '@react-native-community/checkbox';
import {PRIMARY, WHITE} from '../assets/commoncolors';

export default class FilterComponent extends Component {
  constructor() {
    super();
    this.state = {
      snapPoints: ['.01%', '80%'],
      categories: [
        {id: 1, name: 'Eggs', selected: false},
        {id: 2, name: 'Noodles & Pasta', selected: false},
        {id: 3, name: 'Chips & Crisps', selected: false},
        {id: 4, name: 'Fast Food', selected: false},
      ],
    };
    this.bottomSheet = React.createRef();
    this.onBottomSheetStateChange = this.onBottomSheetStateChange.bind(this);
  }

  renderCategoryItem(category) {
    return (
      <View style={styles.category}>
        <CheckBox
          disabled={false}
          value={category.selected}
          style={styles.checkbox}
          tintColors={{true: PRIMARY, false: 'lightgrey'}}
        />
        <Text style={styles.categoryLabel}>{category.name}</Text>
      </View>
    );
  }

  //hide self
  onBottomSheetStateChange() {
    this.props.toggle();
  }

  render() {
    let {snapPoints, categories} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <BottomSheet
          ref={this.bottomSheet}
          snapPoints={snapPoints}
          index={1}
          onChange={this.onBottomSheetStateChange}>
          <View style={styles.contentContainer}>
            <Text style={styles.subtitle}>Category</Text>
            <FlatList
              style={styles.list}
              data={categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => this.renderCategoryItem(item)}
            />
            <Text style={styles.subtitle}>Brand</Text>
            <FlatList
              style={styles.list}
              data={categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => this.renderCategoryItem(item)}
            />
          </View>
          <TouchableOpacity style={styles.button} activeOpacity={0.6}>
            <Text style={styles.buttonText}>Apply Filter</Text>
          </TouchableOpacity>
        </BottomSheet>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentContainer: {
    padding: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'grey',
  },
  list: {
    marginTop: 20,
    marginBottom: 40,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    transform: [{scale: 1.4}],
  },
  categoryLabel: {
    fontSize: 15,
    marginHorizontal: 5,
  },
  button: {
    height: 56,
    backgroundColor: PRIMARY,
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
  },
});
