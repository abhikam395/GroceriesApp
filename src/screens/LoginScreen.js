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

export default class LoginScreen extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={PRIMARY} />
        <Image source={carretIcon} style={styles.icon} />
        <Text style={styles.title}>Login</Text>
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
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Login</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLabel}>SignUp</Text>
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
    // alignItems: 'center',
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
    marginTop: 80,
    color: PRIMARY,
    alignSelf: 'center',
  },
  inputEmail: {
    marginTop: 80,
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
});
