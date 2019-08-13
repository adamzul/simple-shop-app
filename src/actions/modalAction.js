import { OPEN_MODAL } from "./types";

export function openModal(product){
    return function(dispatch, getState){
        dispatch({
            type: OPEN_MODAL,
            payload: {
                open: true,
                product: product
            }
        })
    }
}