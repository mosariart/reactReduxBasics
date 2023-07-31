import {createStore} from 'redux'
import  reducer  from './cakeReducer'

const store = createStore(reducer);
export default store;
//for providing the store to the all components of the
//application we use a reduxTag named Provider in app
//component , the rest of the code is in app component.