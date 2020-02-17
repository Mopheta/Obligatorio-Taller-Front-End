import React, { Component } from 'react'
import '../myStyles/product.scss'

export default class Product extends Component {

    render(){

        const { product } = this.props

        return(
            <tr>
                {/* <td> { product._id } </td> */}
                <td> { product.name } </td>
                <td> { product.description } </td>
                <td> ${ product.price } </td>
                <td><input type="number" className="quantityInput" /></td>
                <td><input type="button" className="btn btn-info btn-md" value="add to cart"/></td>
            </tr>
        )
    }
}