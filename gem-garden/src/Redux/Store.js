import { legacy_createStore } from "react-redux";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
const rootReduder = combineReducers({})

const store = legacy_createStore(rootReduder,applyMiddleware(thunk))