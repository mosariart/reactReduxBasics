import { applyMiddleware,combineReducers, createStore } from "redux";
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import logger from "redux-logger";

const rootStore = createStore(combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
}),applyMiddleware(logger))

export default rootStore;


