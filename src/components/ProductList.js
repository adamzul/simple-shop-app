import React, { Component } from 'react';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

import Product from './Product';

export default class ProductList extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: storeProducts
		};
	}
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="product" />
						<div className="row">
							<ProductConsumer>
								{(value)=>{
									console.log(value);
									return value.products.map((product) => {
										return (<Product key={product.id} product={product} />);
									});
									// return (<h1>{value}</h1>);
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
