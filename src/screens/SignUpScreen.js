import { Link } from '@react-navigation/native';
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
import {PRIMARY, WHITE} from './../assets/commoncolors';
import carretIcon from './../assets/images/carreticon.png';

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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signUpLabel}>Login</Text>
          </TouchableOpacity>
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
});
