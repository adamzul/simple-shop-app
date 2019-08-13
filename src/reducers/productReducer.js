import { GET_PRODUCTS, SET_ACTIVE_PRODUCT } from "../actions/types";

const initialState = {
    products: [],
    activeProduct: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS:

            return {
                ...state,
                products: action.payload.products
            }
        case SET_ACTIVE_PRODUCT: {
            console.log(action.payload.activeProduct)
            return {
                ...state,
                activeProduct: action.payload.activeProduct
            }
        }
        default:
            return state;
    }
}