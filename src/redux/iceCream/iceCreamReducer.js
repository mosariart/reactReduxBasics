import { BUY_ICECREAM } from "./iceCreameTypes";

const initialState = {
    numOfIceCream: 20,
}

const iceCreameReducer = (state = initialState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
            return {...state,numOfIceCream: state.numOfIceCream -1}    
        default: return state;
    }
}

export default iceCreameReducer;