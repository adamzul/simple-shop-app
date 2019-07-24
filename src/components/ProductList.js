import React, { Component } from 'react';

export default class ProductList extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: []
		};
	}
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<div className="row">
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
