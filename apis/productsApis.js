import baseUrl from './../config/baseUrl';
import axios from 'axios';

export function getExclusiveOffers() {
  return axios.get(`${baseUrl}/products`);
}
