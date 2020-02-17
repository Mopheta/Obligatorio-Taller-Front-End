import React, { Component } from 'react'
import '../myStyles/loginStyle.scss'

export default class RegisterNewUser extends Component {
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

    signUp = () => {
        const { email, password } = this.state;

        console.log(email,password)
        fetch('http://tiendaonline2020.herokuapp.com/api/user/register',
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
                                        <h1 className="text-center text-info loginRegisterTitle">Be part of our store</h1>
                                        <div className="form-group">
                                            <label htmlFor="email" className="text-info">Username*:</label><br/>
                                            <input type="text" name="email" id="email" className="form-control w-100" placeholder="enter your email.."
                                                value={ email } onChange={ this.onChangeFields } required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password*:</label><br/>
                                            <input type="password" name="password" id="password" className="form-control w-100" placeholder="enter your password.."
                                                value={ password } onChange={ this.onChangeFields } required
                                            />
                                        </div>
                                        <div className="form-group">
                                            {
                                                this.state.email !== "" && this.state.password !== "" ? 
                                                    <input type="button" name="submit" className="btn btn-info btn-md" value="Sign in" onClick= { this.signUp }/>
                                                :   <input type="button" name="submit" className="btn btn-success btn-md" value="Sign up!" disabled/>
                                            }                                                                                
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