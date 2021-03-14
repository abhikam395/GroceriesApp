import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ToastAndroid,
} from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DeliveryItem from './../components/Checkout/CheckoutDeliveryItem';
import PayoutMethodItem from './../components/Checkout/CheckoutPaymentMethod';
import PromoCodeItem from './../components/Checkout/CheckoutPromoCodeItem';
import TotalCostItem from './../components/Checkout/CheckoutTotalCostItem';
import OrderAcceptScreen from './OrderAcceptScreen';
import {PRIMARY, WHITE} from '../assets/commoncolors';
import { ACTIONS } from '../utils/cartActions';

export default class CheckOutScreen extends Component {
  constructor() {
    super();
    this.state = {
      snapPoints: ['80%', '80%'],
    };
  }

  openLink(url = 'http://google.com') {
    return Linking.openURL(url);
  }

  orderPlace() {
    this.props.changeAction(ACTIONS.ORDERACCEPTED);
  }

  render() {
    let {snapPoints} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <BottomSheet ref={this.bottomSheet} snapPoints={snapPoints} index={1}>
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.clearButton} onP>
              <MaterialIcons
                name="clear"
                style={styles.clearIcon}
                onPress={() => this.props.changeAction(null)}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Checkout</Text>
            <View style={styles.line} />
            <DeliveryItem />
            <View style={styles.line} />
            <PayoutMethodItem />
            <View style={styles.line} />
            <PromoCodeItem />
            <View style={styles.line} />
            <TotalCostItem />
            <View style={styles.line} />
            <Text style={styles.termsCondition}>
              By placing an order you agree to our{' '}
              <Text style={styles.link} onPress={() => this.openLink()}>
                Terms
              </Text>{' '}
              And{' '}
              <Text style={styles.link} onPress={() => this.openLink()}>
                Conditions
              </Text>
            </Text>
            <TouchableOpacity
              style={styles.orderButton}
              activeOpacity={0.8}
              onPress={() => this.orderPlace()}>
              <Text style={styles.orderLabel}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentContainer: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
  },
  clearButton: {
    position: 'absolute',
    right: 0,
    margin: 20,
    zIndex: 10,
  },
  clearIcon: {
    fontSize: 28,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    opacity: 0.5,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: 'grey',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
  },
  label: {
    marginLeft: 'auto',
  },
  arrowIcon: {
    fontSize: 30,
  },
  arrowButton: {
    marginHorizontal: 10,
  },
  moreContainer: {
    height: 400,
  },
  termsCondition: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 22,
  },
  link: {
    color: PRIMARY,
    fontWeight: '700',
  },
  orderButton: {
    height: 57,
    backgroundColor: PRIMARY,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignSelf: 'center',
  },
  orderLabel: {
    color: WHITE,
    fontSize: 17,
    fontWeight: '700',
  },
});
