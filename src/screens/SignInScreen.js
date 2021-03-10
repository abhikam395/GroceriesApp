import React, {Component} from 'react';
import {Image, StyleSheet, Text, SafeAreaView, View, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {DARKBLUE, GMAILCOLOR, WHITE} from '../assets/commoncolors';
import groceriesImage from './../assets/images/groceriesimage.png';

import FeatureIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import countryList from './../utils/countryCodeList';

export default class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
      country: countryList[0].value,
    };
    this.changeCountry = this.changeCountry.bind(this);
  }

  changeCountry(value) {
    console.log(value);
    this.setState({country: value});
  }

  render() {
    let {country} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Image source={groceriesImage} style={styles.image} />
        <View style={styles.subContainer}>
          <Text style={styles.title}>Get your groceries with nectar</Text>
          <View style={styles.row}>
            <Picker
              // selectedValue={country}
              onValueChange={this.changeCountry}
              style={styles.picker}>
              {countryList.map((object, index) => (
                <Picker.Item
                  label={object.label}
                  value={object.value}
                  key={index}
                />
              ))}
            </Picker>
            {/* <TextInput placeholder="Enter Number" /> */}
          </View>
          <View style={styles.buttons}>
            <View
              style={Object.assign({}, styles.button, {
                backgroundColor: GMAILCOLOR,
              })}>
              <FeatureIcon name="facebook" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Continue with Google</Text>
            </View>
            <View style={styles.button}>
              <MaterialCommunityIcons name="gmail" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Continue with Facebook</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    flexDirection: 'column',
    position: 'relative',
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    height: 400,
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    width: '70%',
  },
  buttons: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARKBLUE,
    width: '100%',
    alignSelf: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginRight: 10,
    color: WHITE,
    fontSize: 16,
  },
  picker: {
    width: '100',
  },
  row: {
    
  },
});
