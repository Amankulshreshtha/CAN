import {Alert} from 'react-native';
import {LOGIN_USER, ALL_STATES, LOGOUT} from './types';
import {registerUserAPI, loginUserAPI, fetchStatesAPI} from '../api/api';

// export const registerUser = params => {
//   console.log('Name:', params.name);
//   console.log('Email:', params.email);
//   console.log('Password:', params.password);
//   console.log('Organization:', params.organization);
//   console.log('State:', params.state);
//   console.log('City:', params.city);

//   return async dispatch => {
//     try {
//       const response = await registerUserAPI(params);
//       console.log('Response from API:', response);
//       if (response.email == params.email) {
//         Alert.alert('Error', 'Email is already registered.');
//       } else {
//         // Proceed with other actions if needed
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       throw error;
//     }
//   };
// };

// export const loginUser = (params, navigation) => {
//   console.log('Email:', params.email);
//   console.log('Password:', params.password);

//   return async dispatch => {
//     try {
//       const response = await loginUserAPI(params);
//       // console.log('Response from API:', response);
//       // console.log('API Email', response.result);
//       // console.log('Local Email', params.email);
//       // console.log('token only =', response.Token);

//       if (response.result.email === params.email) {
//         dispatch({
//           type: LOGIN_USER,
//           payload: response,
//         });
//         navigation.navigate('Home');
//       } else {
//         Alert.alert('invalid Email or password');
//       }
//     } catch (error) {
//       Alert.alert('invalid Email or password');
//     }
//   };
// };

export const fetchStates = states => ({
  type: ALL_STATES,
  payload: states,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

export const loginUser = data => ({
  type: LOGIN_USER,
  payload: data,
});
