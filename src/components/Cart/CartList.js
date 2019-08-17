import React, { Component } from 'react'
import CartItem from './CartItem';
export default class CartList extends Component {
    render() {

        const cart = this.props.cart;

        return (
            <div className="container-fluid"> 
                {cart.map(item => {
                    return <CartItem key={item.id} item={item}  />
                })}
            </div>
        )
    }
}
