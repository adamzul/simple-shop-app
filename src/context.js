import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	constructor(props){
		super(props);
		this.getItem = this.getItem.bind(this);
		this.handleDetail = this.handleDetail.bind(this);
		this.addToCart = this.addToCart.bind(this);
	}
	state = {
		products: storeProducts,
		detailProduct: detailProduct,
		cart: []
	}

	getItem(id){
		const products = this.state.products.find(item => item.id === id);
		return products;
	}

	handleDetail(id){
		const products = this.getItem(id);
		this.setState({
			detailProduct: products
		})
	}

	addToCart(id){
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		product.total = product.price;
		this.setState({
			products: tempProducts, cart: [...this.state.cart, product]
		}, ()=> console.log(this.state))
	}

	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail: this.handleDetail,
				addToCart:this.addToCart
			}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};