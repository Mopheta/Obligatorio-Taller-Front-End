import React, { Component } from 'react'
import ShoppingCartItem from './shoppingCartItem';
//Styles
import '../myStyles/shoppingCart.scss'

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    removeCartItem = (_id) => {
        this.props.remove(_id);
    }

    render() {
        const { cart } = this.props;
        const { subTotal, iva, totalAmount } = this.props.cart;
        return (
            <div className="row totals mt-2">
                <h3 className="mx-auto mb-4">Cart</h3>
                {
                    !!cart.items.length > 0 ?
                        <>
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
                                <button className="checkout">Checkout</button>
                            </div>
                            <div>
                                {
                                    cart.items.map(element => {
                                        return (<ShoppingCartItem item={element.product} removeCartItem={this.removeCartItem}/>)
                                    })
                                }
                            </div>
                        </>
                        :
                        <h5 className="mx-auto mb-4">Add a product to the cart!</h5>
                }
            </div>

        )
    }
}
