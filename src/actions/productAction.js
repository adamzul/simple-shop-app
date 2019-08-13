import {storeProducts} from '../data'; 
import {GET_PRODUCTS, SET_ACTIVE_PRODUCT} from './types';

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

export function setActiveProduct(id){
    return function(dispatch, getState){
        const product = getItem(getState, id);
        return dispatch({
            type: SET_ACTIVE_PRODUCT,
            payload: {
                activeProduct: product
            }
        });
    }
}

const getItem = (getState, id) => {
    const products = getState().product.products.find(item => item.id === id);
    return products;
}