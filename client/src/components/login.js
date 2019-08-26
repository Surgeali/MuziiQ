import React, { Component } from "react";
import "./login.css";
import API from "../utils/API";

class Login extends Component {

    state = {
        username: '',
        password: ''
    }
    componentDidMount() {
        // this.loadUsers();
        console.log('component mounted');
    }

    handleInputChange = event => {
        // handles user's input in the input fields
        // updates state
        // console.log(event);;
        const { name, value } = event.target;
        // console.log(name, value);
        this.setState({
            [name]: value
        });
        // console.log("STATE", this.state)
    }

    handleFormSubmit = event => {
        // handles click event by calling loadUsers
        event.preventDefault();
        this.loadUsers();
    }

    loadUsers = () => {
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }
        API.saveUser(newUser)
            .then(res => this.setState({
                users: res.data
            }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
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
                                    <button type="submit" className="btn float-right login_btn" onClick={this.handleFormSubmit}>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;