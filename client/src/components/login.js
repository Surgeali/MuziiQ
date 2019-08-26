import React, { Component } from "react";
import "./login.css";
import API from "../utils/API";

class Login extends Component {

    state = {
        username: '',
        password: '',
        haveAccount: false
    }
    componentDidMount() {
        // this.loadUsers();
        console.log('component mounted');
    }

    handleInputChange = event => {
      console.log(event.target);
        const { name, value } = event.target;
        console.log(name, value)
        this.setState({
            [name]: value
        });

        console.log("STATE", this.state)
    }

    handleRegisterSubmit = event => {
        // handles click event by calling loadUsers
        event.preventDefault();
        this.registerUser();
    }

    handleSignInSubmit = event => {
        event.preventDefault();
        this.verifyUser();
    }

    registerUser = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
            
            API.saveUser(userData)
                .then(res => {
                    // console.log(res.data);
                    this.setState({
                        users: res.data
                    });
                    this.props.history.push('/keyboard');
                })
                .catch(err => console.log(err));

        }

    verifyUser = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        API.signInUser(userData)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    users: res.data
                });
                this.props.history.push('/keyboard');
            })
            .catch(err => console.log(err));
    }

    // handleSignIn = () => {
    //     console.log("STATE BEFORE", this.state)
    //     this.setState({haveAccount: true})
    //     console.log("STATE AFTER", this.state)
    // }

    // handleRegister = () => {
    //     console.log("STATE BEFORE", this.state)
    //     this.setState({haveAccount: false})
    //     console.log("STATE AFTER", this.state)
    // }

    render() {
       
        return (
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            {!this.state.haveAccount ? 
                            <h3>Create Account</h3> 
                            :
                            <h3>Sign In</h3>
                            }
                              
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" name="username" value={this.state.username}
                                        onChange={this.handleInputChange} placeholder="username" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password"
                                        name="password" value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                    </div>
                                <div className="form-group">
                                {!this.state.haveAccount ? 
                                    <button type="submit" className="btn float-right login_btn" onClick={this.handleRegisterSubmit}>Register</button>
                                    :
                                    <button type="submit" className="btn float-right login_btn" onClick={this.handleSignInSubmit}>Sign In</button>
                                }
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                        {!this.state.haveAccount ? 
                            <div className="d-flex justify-content-center links">
                                Already have an account?<a href='#' value={this.state.haveAccount} name='haveAccount' onClick={this.handleInputChange}>Sign In</a>
                            </div>
                            :
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href='#' value={this.state.haveAccount} name='haveAccount' onClick={this.handleInputChange}>Register!</a>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;