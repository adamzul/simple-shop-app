import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

import {Provider, connect} from 'react-redux';
import store from "./store";
import {getProducts} from "./actions/productAction";
import Wrapper from './components/Wrapper';

function App() {
 	return (
		<Provider store={store}>
			<Wrapper />
		</Provider>
	);
}

export default App;
