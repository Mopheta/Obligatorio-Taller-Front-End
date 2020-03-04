import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

//Components
import { signUp } from '../Services/services';

//Styles
import '../myStyles/register.scss'
import 'react-toastify/dist/ReactToastify.css';

class RegisterNewUser extends Component {
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
        const { history } = this.props;

        signUp(email, password)
            .then(res => res.json())
            .then(res => {
                res.status !== 400 ? history.push("/login")
                : toast.error("Email already used", {
                    position: toast.POSITION.TOP_RIGHT
                  });              
            })
            .catch(reason => console.log(reason));
    }

    goBack = () => {

        const { history } = this.props;
        history.push("/login");
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
                                                <input type="text" 
                                                    name="email" 
                                                    id="email" 
                                                    className="form-control w-100" 
                                                    placeholder="enter your email.."
                                                    value={email} 
                                                    onChange={this.onChangeFields}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="text-info">Password*:</label><br />
                                                <input type="password" 
                                                    name="password" 
                                                    id="password" 
                                                    minLength="8" 
                                                    className="form-control w-100" 
                                                    placeholder="enter your password.."
                                                    value={password} 
                                                    onChange={this.onChangeFields} 
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                {
                                                    email !== "" && password !== "" ?
                                                        <input type="submit" name="submit" className="btn btn-success btn-md" value="Sign up!"/>
                                                    : <input type="submit" name="submit" className="btn btn-success btn-md" value="Sign up!" disabled />
                                                }

                                                <input type="button" className="btn btn-outline-secondary float-right" onClick={ this.goBack } value="Go back"/>
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

export default withRouter(RegisterNewUser);