import React, { Component } from 'react'
import '../myStyles/shoppingCartItemStyle.scss'

export default class ShoppingCartItem extends Component {
    removeItem = () => {
        const { item } = this.props;
        this.props.removeCartItem(item);    
    }

    render() {
        const { name, price, quantity } = this.props.item;
        return (
            <tr>
                <td>{ name }</td>
                <td>${ price }</td>
                <td>{ quantity }</td>
                <td>
                    <input type="button"
                        className="btn btn-danger remove_btn"
                        value="Remove"
                        onClick={this.removeItem}
                    />
                </td>
            </tr>
        )
    }
}