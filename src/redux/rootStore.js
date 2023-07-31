import { applyMiddleware,combineReducers, createStore } from "redux";
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import logger from "redux-logger";

const rootStore = createStore(combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
}),applyMiddleware(logger))

export default rootStore;


//at this point we are going to use redux devtools extension
//for that first install chrome extension named redux devtools
//and then follow along the below steps
// npm install --save redux-devtools-extension

// and to use like so:

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));