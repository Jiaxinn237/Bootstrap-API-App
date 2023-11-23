// api.js

import axios from 'axios';

const baseURL = 'https://dummyjson.com';

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Function to update a product
export const updateProduct = async (productId, newData) => {
  try {
    const response = await axios.put(`${baseURL}/products/${productId}`, newData);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Other API functions can be added as needed

export default {
  fetchProducts,
  updateProduct,
  // Add other functions here
};
