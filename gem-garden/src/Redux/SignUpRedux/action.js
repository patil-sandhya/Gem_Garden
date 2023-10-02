import axios from "axios";
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";


export const signUp = (payload) => (dispatch)=>{
dispatch({ type: SIGNUP_REQUEST });

  return axios({
    method: "POST",
    url: "/user",
    baseURL: "https://gem-gardern-mock-api.onrender.com",
    data: payload,
  })
    .then((res) => dispatch({ type: SIGNUP_SUCCESS}))
    .catch((err) => dispatch({ type: SIGNUP_FAILURE}));
}

