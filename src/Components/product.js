import React, { Component } from 'react'
import '../myStyles/product.scss'

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    addItemToCart = () => {
        const { product } = this.props
        const { quantity } = this.state;
        this.props.addToCart(product, quantity);
    }

    handleChangeQuantity = (event) => {
        const { value } = event.target;
        if (value > 0) {
            this.setState({ quantity: value });
        }
    }

    render() {

        const { product } = this.props
        const { quantity } = this.state;
        return (
            
            <div className="card col-lg-3 col-md-4 col-6">
                <div className="cardImgContainer">
                    <img className="card-img-top" src={product.photo} alt="Product representation" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text descriptionProduct">{product.description}</p>
                    <p className="card-text"> ${product.price}</p>
                    <input type="number" className="quantityInput" title="Quantity" value={quantity} onChange={this.handleChangeQuantity} />
                    <button className="btn btn-info float-right" onClick={this.addItemToCart}>Add to cart</button>
                </div>
            </div>
        )
    }
}