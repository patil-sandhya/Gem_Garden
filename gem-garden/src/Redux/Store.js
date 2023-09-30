import { legacy_createStore,applyMiddleware, combineReducers } from "redux";
import { reducer as CartReducer } from "./Cart/reducer";
import thunk from "redux-thunk";
const rootReduder = combineReducers({
    CartReducer
})

export const store = legacy_createStore(rootReduder,applyMiddleware(thunk))