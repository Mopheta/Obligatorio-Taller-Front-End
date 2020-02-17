import React, { Component } from 'react'

//Components
import Product from './product'

//Styles
import '../myStyles/product.scss'

export default class Products extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: [],
            search: ''
        }
    }

    componentDidMount(){

        fetch('https://tiendaonline2020.herokuapp.com/api/product/all')
        .then(response => {
            return response.json()
        })
        .then((allProd) => {
            this.setState({ products: allProd })
        })
    }

    //Test pre-carga
    getAllProducts = () => {
        
        console.log(this.state.products)
    }

    onChangeSearch = (event) => {
        const { value } = event.target;
        this.setState( {search: value} )
    }

    render(){
        const { products, search } = this.state;
        let searchByName = products.filter(prod => prod.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)

        return(
            <div>
                <div className="float-right">
                    <input type="text" className="inputSearch float-right" placeholder="search by product name..."  aria-describedby="basic-addon1"
                        value= { search } onChange = { this.onChangeSearch }
                    />
                    <div className="input-group-prepend">
                        {/* <span className="input-group-text" id="basic-addon1">Lupa</span> */}
                    </div>                   
                </div>
                <div className="container">
                    <table className="table table-striped productContainer mx-auto">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th> 
                                <th scope="col">Units</th> 
                                <th scope="col"></th>                       
                            </tr>
                        </thead>
                        <tbody>                       
                            {
                                searchByName.map((prod, id) => <Product product={ prod } key= { id }/>)
                            }
                        </tbody>
                    </table>
                </div>    
            </div>
        )
    }
}