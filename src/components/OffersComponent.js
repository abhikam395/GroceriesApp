import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {PRIMARY} from '../assets/commoncolors';
import PagerView from 'react-native-pager-view';
import foodImage from './../assets/images/groceriesimage.png';

export default class OffersComponent extends Component {
  constructor() {
    super();
    this.state = {
      indicators: [
        {id: 1, isActive: true},
        {id: 2, isActive: false},
        {id: 3, isActive: false},
        {id: 4, isActive: false},
      ],
      previousSelectedPage: -1,
    };
  }

  pageChange(e) {
    let {position} = e.nativeEvent;
    let {indicators, previousSelectedPage} = this.state;
    indicators[position].isActive = true;

    if (previousSelectedPage >= 0) {
      indicators[previousSelectedPage].isActive = false;
    }

    this.setState({indicators: indicators, previousSelectedPage: position});
  }

  renderDot(product) {
    let color = product.isActive ? PRIMARY : 'lightgrey';
    return (
      <View
        style={Object.assign({}, styles.circle, {
          backgroundColor: color,
        })}
      />
    );
  }

  render() {
    let {indicators} = this.state;

    return (
      <View style={styles.container}>
        <PagerView
          showPageIndicator={true}
          style={styles.pagerView}
          initialPage={0}
          onPageSelected={(e) => this.pageChange(e)}>
          <View key="1" style={styles.page}>
            <Image source={foodImage} style={styles.image} />
          </View>
          <View key="2" style={styles.page}>
            <Image source={foodImage} style={styles.image} />
          </View>
          <View key="3" style={styles.page}>
            <Image source={foodImage} style={styles.image} />
          </View>
          <View key="4" style={styles.page}>
            <Image source={foodImage} style={styles.image} />
          </View>
        </PagerView>
        <FlatList
          style={styles.indicators}
          data={indicators}
          renderItem={({item}) => this.renderDot(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    marginTop: 20,
    height: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  pagerView: {
    height: '100%',
  },
  image: {
    resizeMode: 'cover',
    height: 110,
    width: '100%',
  },
  circle: {
    height: 10,
    width: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  indicators: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
  },
  container: {
    height: 120,
    flex: 1,
  },
});
