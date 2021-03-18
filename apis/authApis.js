import {login, register} from './../store/actions/authAction';
import axios from 'axios';

export function registerUser(email, password) {
  axios
    .get('https://3.7.65.165/api/v1/products', {
    headers: {}
    })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
