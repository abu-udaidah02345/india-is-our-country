// api.js
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = 'http://192.168.0.129:3000/api/users';

const handleResponse = async response => {
  if (!response.ok) {
    const error = await response.json();
    console.error('API Error:', error.error); // Log the error message
    throw new Error(error.error || 'Something went wrong');
  }
  return response.json();
};
export const get = async endpoint => {
  const token = await AsyncStorage.getItem('Token');
  console.log(token, 'token is there');

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.parse(token),
      },
    });

    return handleResponse(response);
  } catch (error) {
    throw new Error(error.message || 'Network error');
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    throw new Error(error.message || 'Network error');
  }
};

export const put = async (endpoint, data) => {
  const token = await AsyncStorage.getItem('Token');
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.parse(token),
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    throw new Error(error.message || 'Network error');
  }
};

export const del = async endpoint => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  } catch (error) {
    throw new Error(error.message || 'Network error');
  }
};
