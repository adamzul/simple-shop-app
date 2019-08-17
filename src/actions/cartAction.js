import { ADD_TO_CART, CLOSE_MODAL } from "./types";

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

export function increment(id){
    return function(dispatch, getState){
        let tempCart = [...getState().cart.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count += 1;
        product.total = product.count * product.price;
        this.setState({
            cart: [...tempCart]
        }, this.addTotals());
    }
}
export function decrement(id){
    return function(dispatch, getState){

        let tempCart = [...getState().cart.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count -= 1;
        if(product.count === 0){
            this.removeItem(id);
        }
        else{
            product.total = product.count * product.price;
            this.setState({
                cart: [...tempCart]
            }, this.addTotals());
        }
    }
    
}
export function removeItem(id){
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState({
        product: [...tempProducts],
        cart: [...tempCart]
    }, () => {
        this.addTotals();
    })
}