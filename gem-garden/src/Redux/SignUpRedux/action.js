import axios from "axios";
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";


export const signUp = (payload) => (dispatch)=>{
dispatch({ type: SIGNUP_REQUEST });
  console.log(payload)
  return axios.post(`https://gem-gardern-mock-api.onrender.com/users`,payload)
    .then((res) => dispatch({ type: SIGNUP_SUCCESS}))
    .catch((err) => dispatch({ type: SIGNUP_FAILURE}));
}

