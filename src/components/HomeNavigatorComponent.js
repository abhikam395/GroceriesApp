import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {PRIMARY} from './../assets/commoncolors';

import ShopScreen from './../screens/home/ShopScreen';
import CartScreen from './../screens/home/CartScreen';
import FavouriteScreen from './../screens/home/FavouriteScreen';
import AccountScreen from './../screens/home/AccountScreen';
import ExploreScreen from './../screens/home/ExploreScreen';

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Account"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let Icon;
          switch (route.name) {
            case 'Shop': {
              Icon = focused ? (
                <EntypoIcon
                  name="shop"
                  style={Object.assign({}, styles.icon, {color: PRIMARY})}
                />
              ) : (
                <EntypoIcon name="shop" style={styles.icon} />
              );
              return Icon;
            }
            case 'Explore': {
              Icon = focused ? (
                <FontAwesome
                  name="search"
                  style={Object.assign({}, styles.icon, {color: PRIMARY})}
                />
              ) : (
                <FontAwesome name="search" style={styles.icon} />
              );
              return Icon;
            }
            case 'Cart': {
              Icon = focused ? (
                <AntDesignIcon
                  name="shoppingcart"
                  style={Object.assign({}, styles.icon, {color: PRIMARY})}
                />
              ) : (
                <AntDesignIcon name="shoppingcart" style={styles.icon} />
              );
              return Icon;
            }
            case 'Favourite': {
              Icon = focused ? (
                <MaterialIcon
                  name="favorite"
                  style={Object.assign({}, styles.icon, {color: PRIMARY})}
                />
              ) : (
                <MaterialIcon name="favorite" style={styles.icon} />
              );
              return Icon;
            }
            case 'Account': {
              Icon = focused ? (
                <MaterialCommunityIcon
                  name="account"
                  style={Object.assign({}, styles.icon, {color: PRIMARY})}
                />
              ) : (
                <MaterialCommunityIcon name="account" style={styles.icon} />
              );
              return Icon;
            }
          }
          return (
            <EntypoIcon
              name="shop"
              style={Object.assign({}, styles.icon, {color: PRIMARY})}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: PRIMARY,
        inactiveTintColor: 'black',
        keyboardHidesTabBar: true,
        safeAreaInsets: 'never',
        style: {height: 66},
        labelStyle: {
          fontSize: 12,
          marginBottom: 7,
        },
      }}>
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 16,
  },
  active: {
    color: PRIMARY,
  },
});
