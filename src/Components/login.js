import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

//Components
import { loginUser } from '../Services/services';

//Styles
import '../myStyles/loginStyle.scss'
import 'react-toastify/dist/ReactToastify.css';

class Login  extends Component {
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

        const { history } = this.props;
        const { email, password } = this.state;

        loginUser(email, password)
            .then(res => res.json())
            .then(res => {
                res.status !== 401 ? history.push("/products")
                : toast.error("Invalid email or password", {
                    position: toast.POSITION.TOP_RIGHT
                  });              
            })
            .catch(err => {
                toast.error("Invalid email or password", {
                    position: toast.POSITION.TOP_RIGHT
                  });
            });
    }

    registerNewUser = () => {

        const { history } = this.props;
        history.push("/register")
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
                                            <h1 className="text-center text-info loginRegisterTitle">Natural Products</h1>
                                            <p className="text-center text-info loginRegisterTitle-info" > since 1891 </p>
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
                                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Sign in" disabled />
                                                }
                                                <input type="button" className="btn btn-outline-info float-right" onClick= { this.registerNewUser } value="Sign up!"/>
                                                <ToastContainer />
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

export default withRouter(Login);