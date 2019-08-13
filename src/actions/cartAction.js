import { ADD_TO_CART } from "./types";

export function addToCart(id){
    return function(dispatch, getState){
        let tempProducts = [...getState().product.products];
        const index = tempProducts.indexOf(getItem(getState, id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        dispatch({
            type: ADD_TO_CART,
            payload:{
                product: product
            }
        });
        // ()=> this.addTotals()
    }
}

const getItem = (getState, id) => {
    const products = getState().product.products.find(item => item.id === id);
    return products;
}