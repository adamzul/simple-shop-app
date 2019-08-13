import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { ButtonContainer } from './Button';
import { connect } from 'react-redux';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalProduct, modalOpen} = value;
                    const {openModal, closeModal} = value;
                    const {img, price, title} = this.props.product;
                    if(!this.props.open){
                        return null;
                    }
                    else{
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>Item Added To Cart</h5>
                                        <img src={img} />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : $ {price}</h5>
                                        <Link to="/" >
                                            <ButtonContainer onClick={() => closeModal()}>
                                                store
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={() => closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>);
                    }
                }}
            </ProductConsumer>
        )
    }
}
const mapStateToProps = state => ({
	product: state.modal.product,
	open: state.modal.open
});

export default connect(mapStateToProps, null)(Modal);

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
}

`;