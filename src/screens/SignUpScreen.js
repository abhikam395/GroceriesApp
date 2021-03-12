import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {PRIMARY, WHITE, DARKBLUE, GMAILCOLOR} from './../assets/commoncolors';
import carretIcon from './../assets/images/carreticon.png';

import FeatureIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SignUpScreen extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={PRIMARY} />
        <Image source={carretIcon} style={styles.icon} />
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          textContentType="username"
          placeholder="Username"
          style={styles.inputName}
        />
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          style={styles.inputEmail}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputPassword}
        />
        <Text style={styles.label}>
          By continuing you agree to our
          <Text style={styles.link}>Terms of Serivce</Text>and
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signUpLabel}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.labelOr}>Or</Text>
        <View style={styles.buttons}>
          <FeatureIcon name="facebook" style={styles.FbButton} />
          <MaterialCommunityIcons name="gmail" style={styles.gmailButton} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  icon: {
    height: 70,
    width: 70,
    marginTop: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    color: PRIMARY,
    alignSelf: 'center',
  },
  inputName: {
    marginTop: 50,
    height: 50,
    borderColor: PRIMARY,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  inputEmail: {
    marginTop: 20,
    height: 50,
    borderColor: PRIMARY,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  inputPassword: {
    marginTop: 20,
    height: 50,
    borderColor: PRIMARY,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: PRIMARY,
  },
  buttonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgetPassword: {
    alignSelf: 'flex-end',
    marginTop: 13,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  signUpLabel: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: PRIMARY,
    fontSize: 16,
  },
  label: {
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: PRIMARY,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  gmailButton: {
    color: WHITE,
    fontSize: 18,
    height: 60,
    width: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: GMAILCOLOR,
    borderRadius: 30,
  },
  FbButton: {
    marginRight: 30,
    color: WHITE,
    fontSize: 18,
    height: 60,
    width: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: DARKBLUE,
    borderRadius: 30,
  },
  labelOr: {
    alignSelf: 'center',
    marginTop: 5,
    color: PRIMARY,
  },
});
