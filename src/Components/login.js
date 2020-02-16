import React, { Component } from 'react'


export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeFields = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginUser = () => {
        const { email, password } = this.state;
        console.log(email,password)
        fetch('http://tiendaonline2020.herokuapp.com/api/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(res => console.log('Success:', res));            
    }

    componentDidMount(){
        fetch('https://tiendaonline2020.herokuapp.com/api/product/all')
        .then(response => {
            return response.json()
        })
        .then((todos) => {
            console.log(todos)
        })
             
    }

    render(){

        const { email, password } = this.state;

        return (
            <div className="login">
                <div id="login">
                    <h3 className="text-center text-white pt-5">--</h3>
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" method="post">
                                        <h1 className="text-center text-info">Natural Products since 1891</h1>
                                        <div className="form-group">
                                            <label htmlFor="email" className="text-info">Username*:</label><br/>
                                            <input type="text" name="email" id="email" className="form-control w-100" placeholder="enter your email.."
                                                value={ email } onChange={ this.onChangeFields } required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info w-100">Password*:</label><br/>
                                            <input type="password" name="password" id="password" className="form-control" placeholder="enter your password.."
                                                value={ password } onChange={ this.onChangeFields } required
                                            />
                                        </div>
                                        <div className="form-group">
                                            {
                                                 email !== "" && password !== "" ? 
                                                <input type="button" name="submit" className="btn btn-info btn-md" value="Sign in" onClick= { this.loginUser }/>
                                                : 
                                                <input type="button" name="submit" className="btn btn-info btn-md" value="Sign in" disabled/>
                                            }               
                                            <p className="text-info float-right">Register here</p>                                       
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}