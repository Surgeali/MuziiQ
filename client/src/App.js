import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Keyboard from "./components/keyboard";
import './index.css'
import NavBar from "./components/navbar";

const PLAY = 'play';
const RECORD = 'record';
const STOP = 'stop';
const SAVE = 'save';

// const src = "https://images.unsplash.com/photo-1509335919466-c196457ea95a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

class App extends Component {
  state = {
    mode: STOP
  }
  recordPressed = () => {
    this.setState({ mode: RECORD })
  }
  playPressed = () => {
    console.log('playPressed')
    this.setState({ mode: PLAY })
  }
  stopPressed = () => {
    this.setState({ mode: STOP })
  }
  savePressed = () => {
    this.setState({ mode: SAVE })
  }
  render() {
    return (
      <div>
        <NavBar recordPressed={this.recordPressed} playPressed={this.playPressed} stopPressed={this.stopPressed} savePressed={this.savePressed} />
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/keyboard" render={() => (<Keyboard mode={this.state.mode} />)} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
