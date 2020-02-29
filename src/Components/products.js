import React, { Component } from 'react'

//Components
import Product from './product'
import ShoppingCart from './shoppingCart'
import ShoppingCartItem from './shoppingCartItem'
//Styles
import '../myStyles/product.scss'

//functions
import { getProducts } from '../Services/services'
import { addToCart as addToCartUtils, calcularMontos } from '../Utils/utils'

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            search: '',
            cart: {
                items: [],
                totalItems: 0,
                subTotal: 0,
                iva: 0,
                totalAmount: 0
            }
        }
    }

    addToCart = (item, quantity) => {
        const { cart } = this.state;
        item.quantity = +quantity;
        const newCart = addToCartUtils(cart, item);
        this.setState({ cart: newCart });
    }

    componentDidMount() {
        getProducts()
            .then(res => res.json())
            .then(res => this.setState({ products: res }))
            .catch(reason => console.log(reason)); //En realidad, poner algun error de verdad
    }

    onChangeSearch = (event) => {
        const { value } = event.target;
        this.setState({ search: value })
    }

    removeCartItem = (item) => {
        const { items } = this.state.cart;
        let prodToRemove = items.find((i) => i.product._id === item._id);
        
        let nuevosItems = items.filter(element => element.product._id !== prodToRemove.product._id)        
        const detalles = calcularMontos(nuevosItems)

        this.setState({
            cart: {
                items: [...nuevosItems],
                totalItems: detalles.totalItems,
                subTotal: detalles.subTotal,
                iva: detalles.iva,
                totalAmount: detalles.totalAmount
            },       
        });
    }

    removeAll = () => {
        this.setState({
            cart: {
                items: [],
                totalItems: 0,
                subTotal: 0,
                iva: 0,
                totalAmount: 0
            }
        })
    }

    render() {
        const { products, search, cart } = this.state;
        let searchByName = products.filter(prod => prod.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">                    
                        <input type="text" className="inputSearch float-right  my-30" placeholder="search by product name..." aria-describedby="basic-addon1"
                            value={search} onChange={this.onChangeSearch}                           
                        />                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="productContainer row mx-auto">
                            {
                                searchByName.map((prod, id) => <Product product={prod} key={id} addToCart={this.addToCart} />)
                            }
                        </div>
                    </div>
                    <div className="col-lg-3 shoppingCartMargin">
                        <ShoppingCart cart={this.state.cart}
                         remove={this.remove}
                         removeAll = {this.removeAll}   
                        />
                        <div>
                            {
                                cart.items.length > 0 &&

                        
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col">Product name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>  
                                <tbody>
                                    {
                                        cart.items.map((item, index) =>
                                        <ShoppingCartItem 
                                            item={item.product} 
                                            key={index} 
                                            removeCartItem={this.removeCartItem} 
                                            quantityItem={ products }

                                        />)
                                    } 
                                </tbody>      
                            </table>  
                        }      
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}