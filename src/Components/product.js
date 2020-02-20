import React, { Component } from 'react'
import '../myStyles/product.scss'

export default class Product extends Component {

    render() {

        const { product } = this.props

        return (

            <div className="card col-lg-3 col-md-4 col-6">
                <div className="cardImgContainer">
                    <img className="card-img-top" src={product.photo} alt="Product representation" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text descriptionProduct">{product.description}</p>
                    <p className="card-text"> ${product.price}</p>
                    <input type="number" className="quantityInput" title="Quantity"/>
                    <a href="google.com" className="btn btn-info float-right">Add to cart</a>
                </div>
            </div>
        )
    }
}