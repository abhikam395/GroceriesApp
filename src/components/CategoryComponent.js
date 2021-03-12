import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import rendomColorPicker from './../utils/rendomColorPicker';
import meatImage from './../assets/images/chicken.png';

export default class CategoryComponent extends Component {
  render() {
    let color = rendomColorPicker();
    let {category} = this.props;
    return (
      <View
        style={Object.assign({}, styles.card, {
          backgroundColor: color.light,
          borderColor: color.dark,
        })}>
        <Image source={meatImage} style={styles.image} />
        <Text style={styles.name}>{category.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    height: 'auto',
    borderWidth: 1,
    width: '42%',
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 30,
  },
  image: {
    resizeMode: 'contain',
    height: 120,
    width: 120,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    alignSelf: 'center',
  },
});
