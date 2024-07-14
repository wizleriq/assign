// import React from 'react'
// import axios from 'axios'
 
// const API_BASE_URL = 'https://api.timbu.cloud';
// const API_KEY = process.env.NEXT_PUBLIC_TIMBU_API_KEY;


// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${API_KEY}`
//   }
// });

// export const fetchProducts = async (page = 1) => {
//   const response = await apiClient.get(`/products?page=${page}`);
//   return response.data;
// };

import axios from 'axios';

const API_BASE_URL = 'https://api.timbu.cloud';
const API_KEY = process.env.NEXT_PUBLIC_TIMBU_API_KEY;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export const fetchProducts = async (page = 1) => {
  try {
    const response = await apiClient.get(`/products?page=${page}`);
    return response.data; // Assuming API returns data directly as an array of products
  } catch (error) {
    throw error; // Propagate the error to handle it in the component
  }
};
