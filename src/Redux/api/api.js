import axios from 'axios';

const BASE_URL = 'http://54.190.192.105:9185/angel';
let Authorization_Key = '';

export const registerUserAPI = async params => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, params);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUserAPI = async params => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, params);
    // console.log('hellooo aman your token is here', response.data.Token);
    Authorization_Key = response.data.Token;
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStatesAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get_all_state`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const CalendarData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get_Events`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: Authorization_Key,
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
