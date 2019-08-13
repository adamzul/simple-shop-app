import React, { Component } from 'react';
import '../App.css';

import {Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';
import Modal from './Modal';

import {Provider, connect} from 'react-redux';
import {getProducts} from "../actions/productAction";

class Wrapper extends Component{
    componentDidMount(){
        this.props.getProducts();
    }
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details/:id" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Modal />
            </React.Fragment>
        );
     }
}

export default connect(null, {getProducts})(Wrapper);
