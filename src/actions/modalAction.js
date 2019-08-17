import { OPEN_MODAL, CLOSE_MODAL } from "./types";

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
export function closeModal(){
    return function(dispatch){
        dispatch({
            type: CLOSE_MODAL,
            payload: {
                open: false
            }
        })
    }
    this.setState({
        modalOpen: false
    });
}