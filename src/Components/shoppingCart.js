import React, { Component } from 'react'

//Styles
import '../myStyles/shoppingCart.scss'

export default class ShoppingCart extends Component{
    constructor(props){
        super(props);

        this.state = {
            cart: {
                item: [],
                totalItems: 0,
                subTotal: 0,
                iva: '20',
                totalAmount: 0
            }
        }
    }

    render(){

        const { subTotal, iva, totalAmount } = this.state.cart;

        return(
            <div className="row totals mt-2">
                <h3 className="mx-auto mb-4">Cart</h3>
                <div className="totals-item col-12">
                    <label>Subtotal</label>
                    <div className="totals-value" id="cart-subtotal">${ subTotal }</div>
                </div>
                <div className="clearfix"></div>
                <div className="totals-item col-12">
                    <label>IVA (22%)</label>
                    <div className="totals-value" id="cart-tax">${ iva }</div>
                </div>
                <div className="clearfix"></div>
                <div className="totals-item col-12">
                    <label>Grand Total</label>
                    <div className="totals-value" id="cart-total">${ totalAmount }</div>
                </div>
                <div className="clearfix"></div>
                <div className="totals-item col-12">
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        )
    }
}
