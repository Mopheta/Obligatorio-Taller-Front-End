import React, { Component } from 'react'

//Components
import Product from './product'
import ShoppingCart from './shoppingCart'

//Styles
import '../myStyles/product.scss'

//functions
import { getProducts } from '../Services/services'
import { addToCart as addToCartUtils } from '../Utils/utils'

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
        item.quantity = quantity;
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

    remove = (_id) => {
        const { items, totalItems, subTotal, iva, totalAmount } = this.state.cart;
        debugger;
        const nuevosItems = items.filter(element => element.product._id !== _id)
        this.setState({
            cart: {
                items: [...nuevosItems],
            },
            totalItems,
            subTotal,
            iva,
            totalAmount
        });
    }

    render() {
        const { products, search } = this.state;
        let searchByName = products.filter(prod => prod.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)

        return (

            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <input type="text" className="inputSearch float-right  my-30" placeholder="search by product name..." aria-describedby="basic-addon1"
                            value={search} onChange={this.onChangeSearch}
                        />
                        <div className="input-group-prepend">
                            {/* <span className="input-group-text" id="basic-addon1">Lupa</span> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <div className="productContainer row mx-auto">
                            {
                                searchByName.map((prod, id) => <Product product={prod} key={id} addToCart={this.addToCart} />)
                            }
                        </div>
                    </div>
                    <div className="col-lg-2 shoppingCartMargin">
                        <ShoppingCart cart={this.state.cart} remove={this.remove} />
                    </div>
                </div>
            </div>
        )
    }
}