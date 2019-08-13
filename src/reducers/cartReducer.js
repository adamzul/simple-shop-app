import { ADD_TO_CART } from "../actions/types";

const initialState = {
    cart: []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload.product]
            }
        default:
            return state;
    }
}