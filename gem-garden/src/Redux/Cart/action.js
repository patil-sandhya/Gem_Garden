import axios from "axios";
import {
  GET_REQUEST,
  GET_REQUEST_FAILURE,
  GET_REQUEST_SUCCESS,
  PATCH_CART_REQUEST_SUCCESS,
} from "./actionType";

export const getUser = (id) => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  let data = axios
    .get(`https://gem-gardern-mock-api.onrender.com/users/${id}`)
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_REQUEST_FAILURE }));
  return data;
};

export const updateCart = (id, cart) => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  let data = axios
    .patch(`https://gem-gardern-mock-api.onrender.com/users/${id}`, {
      cart: cart,
    })
    .then((res) => {
        //console.log(res.data.cart)
      dispatch({ type: PATCH_CART_REQUEST_SUCCESS, payload: res.data.cart });
    })
    .catch((err) => dispatch({ type: GET_REQUEST_FAILURE }));

  return data;
};

export const upuser = (cart)=> (dispatch)=>{
    let data = axios.patch(`https://gem-gardern-mock-api.onrender.com/users/1`,{
        cart:cart
    }).then((res)=> console.log(res))
    return data
}

export const updateOrder = (id,order)=> (dispatch)=>{
  dispatch({ type: GET_REQUEST });
  let data = axios.patch(`https://gem-gardern-mock-api.onrender.com/users/${id}`,{
    orders:order
}).then((res)=> {console.log(res)
  dispatch({ type: PATCH_CART_REQUEST_SUCCESS, payload: res.data.orders });
})
.catch((err) => dispatch({ type: GET_REQUEST_FAILURE }));

return data
}