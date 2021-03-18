import DefaultPreference from 'react-native-default-preference';
import {TOKEN, USER} from '../../store/types/authTypes';

export async function getUser() {
  return await DefaultPreference.get(USER);
}

export async function getToken() {
  return await DefaultPreference.get(TOKEN);
}
