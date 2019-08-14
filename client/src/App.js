import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Markable Music</h1>
        <p class="lead">Make it sound remarkable</p>
      </div>
      <div id="menu">
        <p>Keys or Drums</p>
        <p>Pick a Key</p>
        <p>BPM</p>
        <p>0:00</p>
        <button>Record</button>
        <button>Play Button</button>
        <button>Stop</button>
        <p>Metronome</p>
        <button>Save</button>
        <button>Logout</button>
      </div>
    </div>
    );
  }
}

export default App;
