import React, { Component } from 'react'

//Components
import CheckoutModal from './checkoutModal'

//Styles
import '../myStyles/shoppingCart.scss'

export default class ShoppingCart extends Component {

    removeCartItem = (_id) => {
        this.props.remove(_id);
    }

    render() {
        const { cart,removeAll } = this.props;
        const { subTotal, iva, totalAmount, totalItems } = this.props.cart;
        return (
            <div className="row totals mt-2">
                <div className="col-12 text-center">
                    <h3 className="mx-auto mb-4">Cart<img className="cartImg" src={require('./cart.png')} alt="Cart"/></h3>
                </div>
                {
                    !!cart.items.length > 0 ?
                        <>
                            <div className="totals-item col-12">
                                <label>Items in your cart: </label>
                                <div className="totals-value" id="cart-subtotal">{totalItems}</div>
                            </div>
                            <div className="totals-item col-12">
                                <label>Subtotal</label>
                                <div className="totals-value" id="cart-subtotal">${subTotal}</div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="totals-item col-12">
                                <label>IVA (22%)</label>
                                <div className="totals-value" id="cart-tax">${iva}</div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="totals-item col-12">
                                <label>Grand Total</label>
                                <div className="totals-value" id="cart-total">${totalAmount}</div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="totals-item col-12">
                                <CheckoutModal cart={cart} removeAll={removeAll}/>
                            </div>
                        </>
                        :
                        <div className="col-12 text-center">
                            <h5 className="mx-auto mb-4">Add a product to the cart!</h5>
                        </div>                    
                }
                
            </div>

        )
    }
}
