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
                iva: 0,
                totalAmount: 0
            }
        }
    }

    render(){
        return(
            <div className="row totals mt-2">
                <div className="totals-item col-12">
                    <label>Subtotal</label>
                    <div className="totals-value" id="cart-subtotal">$</div>
                </div>
                <div className="clearfix"></div>
                <div className="totals-item col-12">
                    <label>IVA (22%)</label>
                    <div className="totals-value" id="cart-tax">$</div>
                </div>
                <div className="clearfix"></div>
                <div className="totals-item col-12">
                    <label>Shipping</label>
                    <div className="totals-value" id="cart-shipping">$</div>
                </div>
                <div className="clearfix"></div>
                <div className="totals-item col-12">
                    <label>Grand Total</label>
                    <div className="totals-value" id="cart-total">$</div>
                </div>
                <div className="clearfix"></div>
                <div className="totals-item col-12">
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        )
    }
}
