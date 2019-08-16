import React, { Component } from "react";
import "./keyboard.css";

const keyMap = {
    a: 'white-pressed',
    s: 'white-pressed',
    d: 'white-pressed',
    f: 'white-pressed',
    g: 'white-pressed',
    h: 'white-pressed',
    j: 'white-pressed',
    w: 'black-pressed',
    e: 'black-pressed',
    t: 'black-pressed',
    y: 'black-pressed',
    u: 'black-pressed'
  }
  
  $(document).ready(() => {
  
    $(document).keydown(event => {
      if (keyMap.hasOwnProperty(event.key)) {
        $(`#${event.key}`).addClass(keyMap[event.key])
      }
    });
  
    $(document).keyup(event => {
      if (keyMap.hasOwnProperty(event.key)) {
        $(`#${event.key}`).removeClass(keyMap[event.key])
        
      }
    });
  }); 
  
class Keyboard extends Component {
    render() {
        return (
            <div class="container">
      <div class="blackBox"></div>
      <div id="keyboard">
        <div class="key keyboard-normal" id="a">
          <p class="blackLetter">a</p>
          <p class="whiteNote">C</p>
        </div>

        <div class="powerBox" id="powerBox"></div>

        <div class="key keyboard-accidental" id="w">
          <p class="whiteLetter">w</p>
          <p class="blackNote">C#</p>
        </div>

        <div class="key keyboard-normal" id="s">
          <p class="blackLetter">s</p>
          <p class="whiteNote">D</p>
        </div>

        <div class="key keyboard-accidental" id="e">
          <p class="whiteLetter">e</p>
          <p class="blackNote">D#</p>
        </div>

        <div class="key keyboard-normal" id="d">
          <p class="blackLetter">d</p>
          <p class="whiteNote">E</p>
        </div>

        <div class="key keyboard-normal" id="f">
          <p class="blackLetter">f</p>
          <p class="whiteNote">F</p>
        </div>

        <div class="key keyboard-accidental" id="t">
          <p class="whiteLetter">t</p>
          <p class="blackNote">F#</p>
        </div>

        <div class="key keyboard-normal" id="g">
          <p class="blackLetter">g</p>
          <p class="whiteNote">G</p>
        </div>

        <div class="key keyboard-accidental" id="y">
          <p class="whiteLetter">y</p>
          <p class="blackNote">G#</p>
        </div>

        <div class="key keyboard-normal" id="h">
          <p class="blackLetter">h</p>
          <p class="whiteNote">A</p>
        </div>

        <div class="key keyboard-accidental" id="u">
          <p class="whiteLetter">u</p>
          <p class="blackNote">A#</p>
        </div>

        <div class="key keyboard-normal" id="j">
          <p class="blackLetter">j</p>
          <p class="whiteNote">B</p>
        </div>
        <div class="octave" id="octave">
          z= octave down <br />
          x=octave up
        </div>
      </div>
    </div>

    <div class="settingsBar">
      <div class="left">
        <span>Volume: </span>
        <input
          type="range"
          min="0.0"
          max="1.0"
          step="0.01"
          value="0.5"
          list="volumes"
          name="volume"
        />
        <datalist id="volumes">
          <option value="0.0" label="Mute"> </option>
          <option value="1.0" label="100%"> </option>
        </datalist>
      </div>
      <div class="right">
        <span>Current waveform: </span>
        <select name="waveform">
          <option value="sine">Sine</option>
          <option value="square" selected>Square</option>
          <option value="sawtooth">Sawtooth</option>
          <option value="triangle">Triangle</option>
          <option value="custom">Custom</option>
        </select>
      </div>
    </div>
        );
    }
}

export default Keyboard;