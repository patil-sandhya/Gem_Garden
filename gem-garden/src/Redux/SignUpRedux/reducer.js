import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

const initialState = {
  inReq: false,
  isSucess: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        inReq: true,
        isError: false,
        isSucess: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        inReq: false,
        isSucess: true,
        isError: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isError: true,
        inReq: false,
        isSucess: false,
      };
    default:
      return state;
  }
};
