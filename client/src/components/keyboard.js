import React, { Component } from "react";
import "./keyboard.css";
import $ from 'jquery';

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

class Keyboard extends Component {

componentDidMount = () => {
        console.log('component')
        $(document).keydown(event => {
            console.log(event)
            if (keyMap.hasOwnProperty(event.key)) {
                $(`#${event.key}`).addClass(keyMap[event.key])
            }
        });
    
        $(document).keyup(event => {
            if (keyMap.hasOwnProperty(event.key)) {
                $(`#${event.key}`).removeClass(keyMap[event.key])
    
            }
        });
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="blackBox"></div>
                    <div id="keyboard">
                        <div className="key keyboard-normal" id="a">
                            <p className="blackLetter place">a</p>
                            <p className="whiteNote place">C</p>
                        </div>

                        <div className="powerBox" id="powerBox"></div>

                        <div className="key keyboard-accidental" id="w">
                            <p className="whiteLetter place">w</p>
                            <p className="blackNote place">C#</p>
                        </div>

                        <div className="key keyboard-normal" id="s">
                            <p className="blackLetter place">s</p>
                            <p className="whiteNote place">D</p>
                        </div>

                        <div className="key keyboard-accidental" id="e">
                            <p className="whiteLetter place">e</p>
                            <p className="blackNote place">D#</p>
                        </div>

                        <div className="key keyboard-normal" id="d">
                            <p className="blackLetter place">d</p>
                            <p className="whiteNote place">E</p>
                        </div>

                        <div className="key keyboard-normal" id="f">
                            <p className="blackLetter place">f</p>
                            <p className="whiteNote place">F</p>
                        </div>

                        <div className="key keyboard-accidental" id="t">
                            <p className="whiteLetter place">t</p>
                            <p className="blackNote place">F#</p>
                        </div>

                        <div className="key keyboard-normal" id="g">
                            <p className="blackLetter place">g</p>
                            <p className="whiteNote place">G</p>
                        </div>

                        <div className="key keyboard-accidental" id="y">
                            <p className="whiteLetter place">y</p>
                            <p className="blackNote place">G#</p>
                        </div>

                        <div className="key keyboard-normal" id="h">
                            <p className="blackLetter place">h</p>
                            <p className="whiteNote place">A</p>
                        </div>

                        <div className="key keyboard-accidental" id="u">
                            <p className="whiteLetter place">u</p>
                            <p className="blackNote place">A#</p>
                        </div>

                        <div className="key keyboard-normal" id="j">
                            <p className="blackLetter place">j</p>
                            <p className="whiteNote place">B</p>
                        </div>
                        <div className="octave" id="octave">
                            z= octave down <br />
                            x=octave up
                        </div>
                    </div>

                </div>

                <div className="settingsBar">
                    <div className="left">
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
                    <div className="right">
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
            </div>
        );
    }
}

export default Keyboard;