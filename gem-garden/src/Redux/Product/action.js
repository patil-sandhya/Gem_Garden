import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"
import axios from 'axios'


export const getProduct = (params) => (dispatch)=>{
    dispatch({type: GET_PRODUCT_REQUEST})
    axios.get(`https://gem-gardern-mock-api.onrender.com/products`,params)
    .then((res)=>{
        dispatch({type: GET_PRODUCT_SUCCESS, payload: res})
        // console.log(res.headers.x-total-count);
    })
    .catch((res)=>{
        dispatch({type: GET_PRODUCT_FAILURE})
    })
}