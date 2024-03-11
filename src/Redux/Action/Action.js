import axios from 'axios';
import {LOGIN_USER, ALL_STATES} from './types';
import {} from './types';
import {Alert} from 'react-native';

const BASE_URL = 'http://54.190.192.105:9185/angel';

export const registerUser = params => {
  console.log('Name:', params.name);
  console.log('Email:', params.email);
  console.log('Password:', params.password);
  console.log('Organization:', params.organization);
  console.log('State:', params.state);
  console.log('City:', params.city);

  return async dispatch => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, params);
      console.log('Response from API:', response.data);
      if (response.data.email == params.email) {
        Alert.alert('Error', 'Email is already registered.');
      } else {
        // Proceed with other actions if needed
      }
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };
};
export const loginUser = (params, navigation) => {
  console.log('Email:', params.email);
  console.log('Password:', params.password);

  return async dispatch => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, params);
      console.log('Response from API:', response.data);
      console.log('API Email', response.data.result.email);
      console.log('Local Email', params.email);

      if (response.data.result.email === params.email) {
        dispatch({
          type: LOGIN_USER,
          payload: response.data.result,
        });
        navigation.navigate('Home');
      } else {
        Alert.alert('invalid Email or password');
      }
    } catch (error) {
      // console.error('Error logging in user:', error);
      Alert.alert('invalid Email or password');
      // throw error;
    }
  };
};

export const fetchStates = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${BASE_URL}/get_all_state`);
      dispatch({
        type: ALL_STATES,
        payload: response.data.result,
      });
    } catch (error) {
      console.error('Error fetching states:', error);
      throw error;
    }
  };
};
