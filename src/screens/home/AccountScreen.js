import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PRIMARY, WHITE} from '../../assets/commoncolors';
import store from './../../../store';
import {clear} from './../../../store/actions/authAction';

import AccountItemComponent from './../../components/AccountItemComponent';

export default class AccountScreen extends Component {
  constructor() {
    super();
    this.editImage = this.editImage.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    let {navigation} = this.props;
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });

    //clear user info from permanent storage
    store.dispatch(clear());
  }

  editImage() {
    ToastAndroid.show('Edit Image', 1);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            source={{
              uri:
                'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
            }}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Abhishek kumar</Text>
            <Text style={styles.email}>abhikam395@gmail.com</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={this.editImage}>
              <MaterialIcons name="edit" style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line} />
        <AccountItemComponent icon="shopping-basket" title="Orders" />
        <AccountItemComponent icon="location-on" title="Delivery Address" />
        <AccountItemComponent icon="payment" title="Paymnet methods" />
        <AccountItemComponent icon="local-offer" title="Promo code" />
        <AccountItemComponent icon="notifications" title="Notification" />
        <AccountItemComponent icon="help" title="Help" />
        <AccountItemComponent icon="shopping-basket" title="Orders" />
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.6}
          onPress={this.logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    height: 'auto',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  info: {
    marginLeft: 20,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    color: 'grey',
  },
  editButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: -10,
  },
  editIcon: {
    fontSize: 24,
    color: PRIMARY,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  icon: {
    fontSize: 28,
  },
  navIcon: {
    fontSize: 28,
    marginLeft: 'auto',
  },
  label: {
    marginLeft: 16,
    fontSize: 14,
    fontWeight: '700',
    color: 'grey',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    height: 50,
    backgroundColor: PRIMARY,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: WHITE,
    fontSize: 18,
  },
});
