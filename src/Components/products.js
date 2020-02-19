import React, { Component } from 'react'

//Components
import Product from './product'

//Styles
import '../myStyles/product.scss'

//functions
import { getProducts } from '../Services/services'

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            search: ''
        }
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

    render() {
        const { products, search } = this.state;
        let searchByName = products.filter(prod => prod.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)

        return (

            <div className="container">
                <div className="row">
                    <div className="col pr-0">
                        <input type="text" className="inputSearch float-right mr-0 my-0" placeholder="search by product name..." aria-describedby="basic-addon1"
                            value={search} onChange={this.onChangeSearch}
                        />
                        <div className="input-group-prepend">
                            {/* <span className="input-group-text" id="basic-addon1">Lupa</span> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="productContainer mx-auto">
                        {
                            searchByName.map((prod, id) => <Product product={prod} key={id} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}