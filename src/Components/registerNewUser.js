import React, { Component } from 'react'
import '../myStyles/loginStyle.scss'
import { signUp } from '../Services/services';

export default class RegisterNewUser extends Component {
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

    signUp = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        signUp(email, password)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(reason => console.log(reason));

        //     .catch(error => console.error('Error:', error))
        //     .then(res => console.log('Success:', res));
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="signUp">
                <div id="signUp">
                    <h3 className="text-center text-white pt-5">--</h3>
                    <div className="container">
                        <form onSubmit={ this.signUp }>
                            <div id="signUp-row" className="row justify-content-center align-items-center">
                                <div id="signUp-column" className="col-md-6">
                                    <div id="signUp-box" className="col-md-12">
                                        <form id="signUp-form" className="form" action="" method="post">
                                            <h1 className="text-center text-info signUpRegisterTitle">Be part of our store</h1>
                                            <div className="form-group">
                                                <label htmlFor="email" className="text-info">Username*:</label><br />
                                                <input type="text" name="email" id="email" className="form-control w-100" placeholder="enter your email.."
                                                    value={email} onChange={this.onChangeFields} required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="text-info">Password*:</label><br />
                                                <input type="password" name="password" id="password" className="form-control w-100" placeholder="enter your password.."
                                                    value={password} onChange={this.onChangeFields} required
                                                />
                                            </div>
                                            <div className="form-group">
                                                {
                                                    this.state.email !== "" && this.state.password !== "" ?
                                                        <input type="button" name="submit" className="btn btn-info btn-md" value="Sign up"/>
                                                        : <input type="button" name="submit" className="btn btn-success btn-md" value="Sign up!" disabled />
                                                }
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