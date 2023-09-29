import { legacy_createStore } from "redux";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./Product/reducer";



const rootReduder = combineReducers({productReducer})


export const store = legacy_createStore(rootReduder,applyMiddleware(thunk))