import React, { Component } from 'react'
import '../myStyles/product.scss'

export default class ShoppingCartItem extends Component {

    constructor(props) {
        super(props);
    }

    removeItem = () => {
        const { _id } = this.props.item;
        this.props.removeCartItem(_id);
    }

    render() {
        const { name, quantity } = this.props.item;
        return (
            <>
                <p>
                    Name  : {name} - {quantity}
                    <input type="button"
                        className="btn btn-danger"
                        value="Remove"
                        onClick={this.removeItem}
                    />
                </p>
        </>
        )
    }
}