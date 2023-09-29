
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as AuthReducer } from "./AuthRedux/reducer";
import { reducer as SignUpReducer } from "./SignUpRedux/reducer";
import thunk from "redux-thunk";

const rootReduder = combineReducers({AuthReducer, SignUpReducer});

export const store = legacy_createStore(rootReduder,applyMiddleware(thunk))

