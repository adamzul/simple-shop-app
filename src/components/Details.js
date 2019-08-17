import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';


import {connect} from 'react-redux';
import {storeProducts} from '../data';
import { addToCart } from "../actions/cartAction";

class Details extends Component {
	constructor(props){
		super(props);
		this.state = {
			product: {}
		}
	}
	componentWillMount(){
		const product = storeProducts.find(item => item.id == this.props.match.params.id);
		this.setState({
			product: product
		});
	}
	render() {
		{
			// console.log(value);
			
			const {id, company, img, info, price, title, inCart} = this.state.product;
			// console.log(value.detailProduct);
			
			return (<div className="container py-5">
				<div className="row">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>{title}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
						<img src={img} className="img-fluid" alt="product" />
					</div>
					<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
						<h2>model: {title}</h2>
						<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
							made by: <span className="text-uppercase">{company}</span>
						</h4>
						<h4 className="text-blue">
							<strong>
								price: <span>$</span> {price}
							</strong>
						</h4>
						<p className="text-capitalize font-weight-bold mt-3 mb-0">
							some info about product: 
						</p>
						<p className="text-muted lead">
							{info}
						</p>
						<div>
							
							<Link to="/">
								<ButtonContainer >back to product</ButtonContainer>
							</Link>
							<ButtonContainer cart disabled={inCart} onClick={() => {
									this.props.addToCart(id)
									// value.addToCart(id);
									// value.openModal(id);
								}}>{inCart ? "in cart":"add to cart"}</ButtonContainer>
						</div>
					</div>
				</div>
			</div>)
		}
		
	}
}
const mapStateToProps = state => ({
	activeProduct: state.product.activeProduct
});
export default connect(mapStateToProps, {addToCart})(Details);