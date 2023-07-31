import { combineReducers, createStore } from "redux";
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootStore = createStore(combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
}))

export default rootStore;