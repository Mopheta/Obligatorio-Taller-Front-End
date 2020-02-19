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
                    <div className="totals-value" id="cart-subtotal">71.97</div>
                </div>
                <div class="clearfix"></div>
                <div className="totals-item col-12">
                    <label>IVA (22%)</label>
                    <div className="totals-value" id="cart-tax">3.60</div>
                </div>
                <div class="clearfix"></div>
                <div className="totals-item col-12">
                    <label>Shipping</label>
                    <div className="totals-value" id="cart-shipping">15.00</div>
                </div>
                <div class="clearfix"></div>
                <div className="totals-item col-12">
                    <label>Grand Total</label>
                    <div className="totals-value" id="cart-total">90.57</div>
                </div>
                <div class="clearfix"></div>
                <div className="totals-item col-12">
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        )
    }
}
