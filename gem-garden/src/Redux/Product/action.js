import axios from 'axios';
import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    POST_PRODUCT_REQUEST,
    POST_PRODUCT_SUCCESS,
    POST_PRODUCT_FAILURE,
  } from './actionTypes';
  

// Fetch Products
export const getProduct = (params) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });

  axios
    .get('https://gem-gardern-mock-api.onrender.com/products', params)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: GET_PRODUCT_FAILURE, payload: error.message });
    });
};

// Add a Product
export const postProduct = (productData) => (dispatch) => {
  dispatch({ type: POST_PRODUCT_REQUEST });

  axios
    .post('https://gem-gardern-mock-api.onrender.com/products', productData)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: POST_PRODUCT_FAILURE, payload: error.message });
    });
};
