/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
  ToastAndroid,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {PRIMARY, WHITE} from '../../assets/commoncolors';
import AppleImage from './../../assets/images/apple.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class ProductDetailScreen extends Component {
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
      favoriteSelected: false,
      quantity: 1,
      price: 4.44,
    };
  }

  renderDot(product) {
    let color = product.isActive ? PRIMARY : 'grey';
    return (
      <View
        style={Object.assign({}, styles.circle, {
          backgroundColor: color,
        })}
      />
    );
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

  selectProductToFavorite() {
    let {favoriteSelected} = this.state;
    this.setState({favoriteSelected: !favoriteSelected});
  }

  onBackPress() {
    let {navigation} = this.props;
    navigation.replace('Home');
  }

  onShareClick() {
    console.log(12);
  }

  addItem() {
    let {quantity} = this.state;
    this.setState({quantity: ++quantity});
  }

  reduceItem() {
    let {quantity} = this.state;
    if (quantity > 1) {
      this.setState({quantity: --quantity});
    }
  }

  totalPrice(price, quantity) {
    return (price * quantity).toFixed(2);
  }

  render() {
    let {indicators, favoriteSelected, quantity, price} = this.state;

    function favoriteIcon() {
      if (favoriteSelected) {
        return (
          <MaterialIcons name="favorite" style={styles.icon} color="black" />
        );
      }
      return (
        <MaterialIcons
          name="favorite-border"
          style={styles.icon}
          color="grey"
        />
      );
    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          style={styles.container}
          data={[]}
          ListEmptyComponent={null}
          keyExtractor={null}
          ListHeaderComponent={
            <View style={styles.pagerContainer}>
              <TouchableOpacity onPress={() => this.onBackPress()}>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  style={styles.backIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onShareClick()}>
                <MaterialIcons name="share" style={styles.shareIcon} />
              </TouchableOpacity>
              <PagerView
                style={styles.pagerView}
                initialPage={0}
                onPageSelected={(e) => this.pageChange(e)}>
                <View key="1" style={styles.page}>
                  <Image source={AppleImage} style={styles.image} />
                </View>
                <View key="2" style={styles.page}>
                  <Image source={AppleImage} style={styles.image} />
                </View>
                <View key="3" style={styles.page}>
                  <Image source={AppleImage} style={styles.image} />
                </View>
                <View key="4" style={styles.page}>
                  <Image source={AppleImage} style={styles.image} />
                </View>
              </PagerView>
              <FlatList
                style={styles.indicators}
                data={indicators}
                renderItem={({item}) => this.renderDot(item)}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          }
          // eslint-disable-next-line react/jsx-no-duplicate-props
          ListEmptyComponent={
            <View style={styles.productInfoContainer}>
              <Text style={styles.title}>Natural Red Apple</Text>
              <TouchableOpacity
                style={styles.favoriteIcon}
                onPress={() => this.selectProductToFavorite()}>
                {favoriteIcon()}
              </TouchableOpacity>
              <Text style={styles.price}>1kg, Price</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity>
                  <AntDesign
                    name="minus"
                    onPress={() => this.reduceItem()}
                    style={styles.icon}
                    color={quantity === 1 ? 'grey' : PRIMARY}
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity>
                  <AntDesign
                    name="plus"
                    onPress={() => this.addItem()}
                    style={Object.assign({}, styles.icon, {color: PRIMARY})}
                  />
                </TouchableOpacity>
                <Text style={styles.totalPrice}>
                  $ {this.totalPrice(price, quantity)}
                </Text>
              </View>
              <View style={styles.line} />
              <View style={styles.subComponent}>
                <Text style={styles.subLabel}>Product Detail</Text>
                <Text style={styles.description}>
                  Sets the elevation of a view, using Android's underlying
                  elevation API. This adds a drop shadow to the item and affects
                  z-order for overlapping views. Only supported on Android 5.0+,
                  has no effect on earlier versions.
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  style={styles.arrowIcon}
                />
              </View>
              <View style={styles.line} />
              <View style={styles.subComponent}>
                <Text style={styles.subLabel}>Nutritions</Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.arrowIcon}
                />
              </View>
              <View style={styles.line} />
              <View style={styles.subComponent}>
                <Text style={styles.subLabel}>Review</Text>
                <View style={styles.rating}>
                  <AirbnbRating
                    showRating={false}
                    isDisabled
                    size={18}
                    count={5}
                    defaultRating={5}
                  />
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    style={styles.icon}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                <Text style={styles.buttonTitle}>ADD TO BASKET</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerContainer: {
    height: 'auto',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'lightgrey',
  },
  pagerView: {
    height: 300,
  },
  image: {
    width: 220,
    resizeMode: 'contain',
    alignSelf: 'center',
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
    bottom: 15,
    alignSelf: 'center',
  },
  page: {
    height: '100%',
  },
  productInfoContainer: {
    padding: 15,
    position: 'relative',
    flex: 1,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 0,
    margin: 20,
    color: 'lightgrey',
  },
  price: {
    color: 'grey',
    fontWeight: '700',
    marginTop: 5,
  },
  quantityContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 15,
    fontWeight: '700',
    borderColor: 'lightgrey',
  },
  totalPrice: {
    fontSize: 22,
    color: 'black',
    fontWeight: '700',
    marginLeft: 'auto',
  },
  line: {
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
    marginTop: 5,
  },
  subComponent: {
    marginVertical: 20,
    position: 'relative',
  },
  subLabel: {
    fontSize: 15,
    fontWeight: '700',
  },
  description: {
    marginVertical: 10,
    fontSize: 13,
    color: 'grey',
  },
  icon: {
    fontSize: 28,
    position: 'relative',
    top: 1,
  },
  arrowIcon: {
    fontSize: 28,
    position: 'absolute',
    right: 1,
  },
  backIcon: {
    fontSize: 30,
    top: 20,
    left: 10,
  },
  shareIcon: {
    position: 'absolute',
    fontSize: 24,
    right: 20,
  },
  rating: {
    height: 20,
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 57,
    backgroundColor: PRIMARY,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontWeight: '700',
    color: WHITE,
  },
});
