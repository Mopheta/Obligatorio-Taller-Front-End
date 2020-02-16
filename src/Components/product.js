import React, { Component } from 'react'


export default class Product extends Component {

    render(){

        const { product } = this.props

        return(
            <tr>
                {/* <td> { product._id } </td> */}
                <td> { product.name } </td>
                <td> { product.description } </td>
                <td> ${ product.price } </td>
                <td><input type="button" value="add to cart"/></td>
            </tr>
        )
    }
}