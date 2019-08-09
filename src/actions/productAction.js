import {storeProducts} from '../data'; 
import {GET_PRODUCTS} from './types';

export function getProducts(){
    return function(dispatch, getState){
        return dispatch({
            type: GET_PRODUCTS,
            payload: {
                products: storeProducts
            }
        });
    }
}