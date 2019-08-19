import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Keyboard from "./components/keyboard";
import './index.css'
import NavBar from "./components/navbar";



// const src = "https://images.unsplash.com/photo-1509335919466-c196457ea95a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/keyboard" component={Keyboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
