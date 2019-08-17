import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
    open: false,
    product: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case OPEN_MODAL:
            return {
                ...state,
                open: action.payload.open,
                product: action.payload.product
            }
        case CLOSE_MODAL:
            return {
                ...state,
                open:action.payload.open
            }
        default:
            return state
    }
}