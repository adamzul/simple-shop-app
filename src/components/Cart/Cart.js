import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../context';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { connect } from 'react-redux';

class Cart extends Component {
	render() {
		return (
			<section>
				<ProductConsumer>
					{(value)=>{
						// const {cart} = value;

						if(this.props.cart.length > 0){
							return (
							<React.Fragment>
								<Title name="your" title="cart" />
								<CartColumns />
								<CartList cart={this.props.cart} />
								<CartTotals value={value} history={this.props.history} />
							</React.Fragment>
							);
						}
						else{
							return <EmptyCart />
						}
					}}
				</ProductConsumer>
				
			</section>
		);
	}
}

const mapStateToProps = state => ({
	cart: state.cart.cart
})

export default connect(mapStateToProps, null)(Cart);