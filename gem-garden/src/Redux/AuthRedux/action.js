
import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios({
    method: "POST",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export { login };