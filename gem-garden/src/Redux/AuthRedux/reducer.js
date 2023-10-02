import {
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "./actionType";

const initialState = {
  isAuth: false,
  token: "",
  isLogin: false,
  isLoading: false,
  isError: false,
  userData: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLogin: false,
        token: payload,
        isLoading: false,
        isError: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        isLogin: true,
        token: "",
        isLoading: false,
        isError: true,
      };
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userData: payload,
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
