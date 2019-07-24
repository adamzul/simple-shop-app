import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
				<Link to="/">
				sss
					<img src={logo} alt="logo" className="navbar-brand" />
				</Link>
				<ul className="navbar-nav align-items-center"> 
					<li className="nav-item ml-5">
						<Link to="/details" className="nav-link" >
						aa
							<img src={logo} alt="logo" className="navbar-brand" />

						</Link>
					</li>
				</ul>
			</nav>

		);
	}
}
