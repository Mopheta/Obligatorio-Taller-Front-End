import React, { Component } from 'react'
import '../myStyles/loginStyle.scss'
import { loginUser } from '../Services/services';

export default class Login extends Component {
    constructor(props) {
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

    loginUser = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        loginUser(email, password)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(reason => console.log(reason));
            console.log(email,password);
    }

    render() {

        const { email, password } = this.state;

        return (
            <div className="login">
                <div id="login">
                    <h3 className="text-center text-white pt-5">--</h3>
                    <div className="container">
                        <form onSubmit={ this.loginUser }>
                            <div id="login-row" className="row justify-content-center align-items-center">
                                <div id="login-column" className="col-md-6">
                                    <div id="login-box" className="col-md-12">
                                        <form id="login-form" className="form" action="" method="post">
                                            <h1 className="text-center text-info loginRegisterTitle">Natural Products - since 1891</h1>
                                            <div className="form-group">
                                                <label htmlFor="email" className="text-info">Username*:</label><br />
                                                <input type="text" name="email" id="email" className="form-control w-100" placeholder="enter your email.."
                                                    value={email} onChange={this.onChangeFields} required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="text-info w-100">Password*:</label><br />
                                                <input type="password" name="password" id="password" className="form-control" placeholder="enter your password.."
                                                    value={password} onChange={this.onChangeFields} required
                                                />
                                            </div>
                                            <div className="form-group">
                                                {
                                                    email !== "" && password !== "" ?
                                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Sign in" />
                                                        :
                                                        <input type="button" name="submit" className="btn btn-info btn-md" value="Sign in" disabled />
                                                }
                                                <p className="text-info float-right">Register here</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}