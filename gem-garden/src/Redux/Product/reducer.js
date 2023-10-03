import { ADMIN_DELETE_REQUEST, POST_PRODUCT_SUCCESS } from "../Admin/actionTypes";
import {
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    // POST_PRODUCT_SUCCESS
  } from "./actionTypes";

  const initialState = {
    products: [],
    totalProductFetch: "",
    isLoading: false,
    isError: false,
  };
  export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

      case GET_PRODUCT_REQUEST:
        return { ...state, isLoading: true };

      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          products: payload.data,
          totalProductFetch: payload.headers['x-total-count'],
        };

      case GET_PRODUCT_FAILURE:
        return { ...state, isLoading: false, isError: true };

      case POST_PRODUCT_SUCCESS:
        return { ...state, isLoading: false, products: [...state.products, payload] };

      default:
        return state;
    }
  };