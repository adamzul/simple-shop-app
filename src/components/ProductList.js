import React, { Component } from 'react';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

import Product from './Product';
import { connect } from 'react-redux';

class ProductList extends Component {
	constructor(props){
		super(props);
		
	}
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="product" />
						<div className="row">
								{
									this.props.products.map((product) => {
										return (<Product key={product.id} product={product} />);
									})
								}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	products: state.product.products
});
export default connect(mapStateToProps, null)(ProductList);