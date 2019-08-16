import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";
import Keyboard from "./components/keyboard";

// const src = "https://images.unsplash.com/photo-1509335919466-c196457ea95a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

class App extends Component {

  styles = {
    backgroundImg: {
      backgroundImage: `url("https://img.pixers.pics/pho_wat(s3:700/FO/45/73/84/54/700_FO45738454_d399959d5a4bf8fa6ec39730a35ebcb0.jpg,583,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,363,650,jpg)/wall-murals-abstract-music-volume-equalizer-concept-idea-background.jpg.jpg")`,
      height: '100%',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'

    },
    menu: {
      display: "inline",
      color: 'white'
    },
    jumbotron: {
      // backgroundImage: `url("https://hutchingspianos.com.au/wp-content/uploads/2017/06/Piano-Keys-Background.png")`,
      backgroundPosition: "bottom",
      backgroundColor: 'black',
      backgroundSize: "cover"
    },

    jumbotronOne: {
      color: 'white'
    },
    jumbotronP: {
      color: "white"
    }
  }
  render() {
    return (
      <div className='App'>
        <div style={this.styles.jumbotron}>
          <div className="container">
            <h1 style={{ color: 'white' }}>Markable Music</h1>
            <p style={{ color: 'white' }}>Make it sound remarkable</p>
          </div>
          <div style={this.styles.menu} id="menu">

            <select>
              <option value="keys">Keys</option>
              <option value="drums">Drums</option>
            </select>

            <select>
              <option value="c">C</option>
              <option value="c#">C#</option>
              <option value="d">D</option>
              <option value="d#">D#</option>
              <option value="e">E</option>
              <option value="f">F</option>
              <option value="f#">F#</option>
              <option value="g">G</option>
              <option value="g#">G#</option>
              <option value="a">A</option>
              <option value="a#">A#</option>
              <option value="b">B </option>
            </select>

            <select>
              <option value="major">Major</option>
              <option value="minor">Minor</option>
            </select>

            <p>BPM</p>
            <p>0:00</p>

            <button id="record">Record</button>
            <button id="start">Play Button</button>
            <button id="stop">Stop</button>
            <button>Save</button>
            <button href="./login.js">Logout</button>
            
          </div>
        </div>
        <Login></Login>

        <Keyboard/>
      </div>
    );
  }
}

export default App;
