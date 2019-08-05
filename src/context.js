import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: storeProducts,
		detailProduct: detailProduct,
		cart: storeProducts,
		modalOpen: false,
		modalProduct: detailProduct,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0
	}

	getItem = (id) => {
		const products = this.state.products.find(item => item.id === id);
		return products;
	}

	handleDetail = (id) => {
		const products = this.getItem(id);
		this.setState({
			detailProduct: products
		})
	}

	addToCart = (id) => {
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

	openModal = (id) =>{
		const product = this.getItem(id);
		this.setState({
			modalProduct: product, modalOpen: true
		});
	}

	closeModal = () => {
		this.setState({
			modalOpen: false
		});
	}

	increment = (id) => {
	}
	decrement = (id) => {
	}
	removeItem = (id) => {
	}
	clearCart = () => {
	}

	render() {
		return (
			<ProductContext.Provider value={{
				...this.state,
				handleDetail: this.handleDetail,
				addToCart:this.addToCart,
				openModal: this.openModal,
				closeModal: this.closeModal,
				increment: this.increment,
				decrement: this.decrement,
				removeItem: this.removeItem,
				clearCart: this.clearCart
			}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};