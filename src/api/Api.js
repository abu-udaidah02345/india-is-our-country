// api.js

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

const handleResponse = response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

export const apiGet = async endpoint => {
  const url = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add any additional headers here
    },
  });

  return handleResponse(response);
};

export const apiPost = async (endpoint, data) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any additional headers here
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};

export const apiPut = async (endpoint, data) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // Add any additional headers here
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};

export const apiDelete = async endpoint => {
  const url = `${API_BASE_URL}/${endpoint}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Add any additional headers here
    },
  });

  return handleResponse(response);
};
