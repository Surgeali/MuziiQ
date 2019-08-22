import React, { Component } from "react";
import "./keyboard.css";
import $ from 'jquery';
import { ENETDOWN, DH_CHECK_P_NOT_SAFE_PRIME } from "constants";


const cssKeyMap = {
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
    u: 'black-pressed',
    m: 'powerModeOn'
}
var powerMode = false;

$(document).ready(() => {
    $(document).keydown(event => {
        // FOCUSED ON WHEN M IS PRESSED
        // Check first if key pressed was m
        // if m was pressed we then need to check the current class on the element
        // if class is powerModeOn then we need to remove this class
        // else frop in to next code block
        if (cssKeyMap.hasOwnProperty(event.key)) {
            if (event.key === 'm') {
                // let test = $(`#${event.key}`).attr("class").split(' ');
                // if (test.includes(cssKeyMap[event.key])) {
                //     $(`#${event.key}`).removeClass(cssKeyMap[event.key]);
                // } else {
                //     $(`#${event.key}`).addClass(cssKeyMap[event.key]);
                // }
            } else {
                $(`#${event.key}`).addClass(cssKeyMap[event.key]);
            }
        }
    });

    $(document).keyup(event => {
        // console.log(keymap.hasOwnProperty(event.key));
        if (keyMap.hasOwnProperty(event.key) && event.key !== 'm') {
            $(`#${event.key}`).removeClass(keyMap[event.key]);
        }
    });

});

// GLOBAL REFERENCES
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscList = [];
let masterGainNode = null;
let keyboard = document.querySelector(".keyboard");
let wavePicker = document.querySelector("select[name='waveform']");
let volumeControl = document.querySelector("input[name='volume']");
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
let recordingEnabled = false;
let mode = undefined;
let key = "";

const keyMap = {
    a: "C",
    s: "D",
    d: "E",
    f: "F",
    g: "G",
    h: "A",
    j: "B",
    w: "C#",
    e: "D#",
    t: "F#",
    y: "G#",
    u: "A#"
};
const chordMap = {
    a: ["C", "G"],
    s: ["D", "A"],
    d: ["E", "B"],
    f: ["F", "^C"],
    g: ["G", "^D"],
    h: ["A", "^E"],
    j: ["B", "^F#"],
    w: ["C#", "^G#"],
    e: ["D#", "^A#"],
    t: ["F#", "^C#"],
    y: ["G#", "^D#"],
    u: ["A#", "^F"]
};

// FUNCTION DECLARATIONS
function createNoteTable() {
    let noteFreq = [];

    for (let i = 0; i < 9; i++) {
        noteFreq[i] = [];
    }

    noteFreq[1]["C"] = 32.703195662574829;
    noteFreq[1]["C#"] = 34.647828872109012;
    noteFreq[1]["D"] = 36.708095989675945;
    noteFreq[1]["D#"] = 38.890872965260113;
    noteFreq[1]["E"] = 41.203444614108741;
    noteFreq[1]["F"] = 43.653528929125485;
    noteFreq[1]["F#"] = 46.249302838954299;
    noteFreq[1]["G"] = 48.999429497718661;
    noteFreq[1]["G#"] = 51.913087197493142;
    noteFreq[1]["A"] = 55.0;
    noteFreq[1]["A#"] = 58.270470189761239;
    noteFreq[1]["B"] = 61.735412657015513;

    noteFreq[2]["C"] = 65.406391325149658;
    noteFreq[2]["C#"] = 69.295657744218024;
    noteFreq[2]["D"] = 73.41619197935189;
    noteFreq[2]["D#"] = 77.781745930520227;
    noteFreq[2]["E"] = 82.406889228217482;
    noteFreq[2]["F"] = 87.307057858250971;
    noteFreq[2]["F#"] = 92.498605677908599;
    noteFreq[2]["G"] = 97.998858995437323;
    noteFreq[2]["G#"] = 103.826174394986284;
    noteFreq[2]["A"] = 110.0;
    noteFreq[2]["A#"] = 116.540940379522479;
    noteFreq[2]["B"] = 123.470825314031027;

    noteFreq[3]["C"] = 130.812782650299317;
    noteFreq[3]["C#"] = 138.591315488436048;
    noteFreq[3]["D"] = 146.83238395870378;
    noteFreq[3]["D#"] = 155.563491861040455;
    noteFreq[3]["E"] = 164.813778456434964;
    noteFreq[3]["F"] = 174.614115716501942;
    noteFreq[3]["F#"] = 184.997211355817199;
    noteFreq[3]["G"] = 195.997717990874647;
    noteFreq[3]["G#"] = 207.652348789972569;
    noteFreq[3]["A"] = 220.0;
    noteFreq[3]["A#"] = 233.081880759044958;
    noteFreq[3]["B"] = 246.941650628062055;

    noteFreq[4]["C"] = 261.625565300598634;
    noteFreq[4]["C#"] = 277.182630976872096;
    noteFreq[4]["D"] = 293.66476791740756;
    noteFreq[4]["D#"] = 311.12698372208091;
    noteFreq[4]["E"] = 329.627556912869929;
    noteFreq[4]["F"] = 349.228231433003884;
    noteFreq[4]["F#"] = 369.994422711634398;
    noteFreq[4]["G"] = 391.995435981749294;
    noteFreq[4]["G#"] = 415.304697579945138;
    noteFreq[4]["A"] = 440.0;
    noteFreq[4]["A#"] = 466.163761518089916;
    noteFreq[4]["B"] = 493.883301256124111;

    noteFreq[5]["C"] = 523.251130601197269;
    noteFreq[5]["C#"] = 554.365261953744192;
    noteFreq[5]["D"] = 587.32953583481512;
    noteFreq[5]["D#"] = 622.253967444161821;
    noteFreq[5]["E"] = 659.255113825739859;
    noteFreq[5]["F"] = 698.456462866007768;
    noteFreq[5]["F#"] = 739.988845423268797;
    noteFreq[5]["G"] = 783.990871963498588;
    noteFreq[5]["G#"] = 830.609395159890277;
    noteFreq[5]["A"] = 880.0;
    noteFreq[5]["A#"] = 932.327523036179832;
    noteFreq[5]["B"] = 987.766602512248223;

    noteFreq[6]["C"] = 1046.502261202394538;
    noteFreq[6]["C#"] = 1108.730523907488384;
    noteFreq[6]["D"] = 1174.659071669630241;
    noteFreq[6]["D#"] = 1244.507934888323642;
    noteFreq[6]["E"] = 1318.510227651479718;
    noteFreq[6]["F"] = 1396.912925732015537;
    noteFreq[6]["F#"] = 1479.977690846537595;
    noteFreq[6]["G"] = 1567.981743926997176;
    noteFreq[6]["G#"] = 1661.218790319780554;
    noteFreq[6]["A"] = 1760.0;
    noteFreq[6]["A#"] = 1864.655046072359665;
    noteFreq[6]["B"] = 1975.533205024496447;

    noteFreq[7]["C"] = 2093.004522404789077;
    noteFreq[7]["C#"] = 2217.461047814976769;
    noteFreq[7]["D"] = 2349.318143339260482;
    noteFreq[7]["D#"] = 2489.015869776647285;
    noteFreq[7]["E"] = 2637.020455302959437;
    noteFreq[7]["F"] = 2793.825851464031075;
    noteFreq[7]["F#"] = 2959.955381693075191;
    noteFreq[7]["G"] = 3135.963487853994352;
    noteFreq[7]["G#"] = 3322.437580639561108;
    noteFreq[7]["A"] = 3520.0;
    noteFreq[7]["A#"] = 3729.310092144719331;
    noteFreq[7]["B"] = 3951.066410048992894;
    noteFreq[8]["C"] = 4186.009044809578154;
    return noteFreq;
}

const noteFreq = createNoteTable();
let oscilators = {};
let recording = ['a', 'a', 's', 's', 'd', 'd'];
let octaveChange = 0;
let octave = 3;

//The setup function is responsible for building the keyboard and preparing the app to play music.
function setup() {
    keyboard = document.querySelector(".keyboard");
    wavePicker = document.querySelector("select[name='waveform']");
    volumeControl = document.querySelector("input[name='volume']");

    volumeControl.addEventListener("change", changeVolume, false);

    sineTerms = new Float32Array([0, 0, 1, 0, 1]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);
    masterGainNode = audioContext.createGain();
    masterGainNode.connect(audioContext.destination);
    masterGainNode.gain.value = volumeControl.value;

    for (let i = 0; i < 9; i++) {
        oscList[i] = [];
    }

    //keyboard pressing
    document.onkeydown = function (event) {
        keyDown(event);
    };

    document.onkeyup = function (event) {
        keyUp(event);
    };

    //=============_____---------________--------=============//

    // console.log(key, octaveChange);

    // let freq = noteFreq[octave + octaveChange][keyMap[key]];
    // if (freq) {
    //     if (mode === 'record') {
    //         recording.push(key);

    //     }
    //     console.log("HERE... " + freq);
    //     oscilators[key] = playTone(freq);

    //     // function userInput(freq) {
    //     //     recording.push(document.freq.value);
    //     //     console.log(recording); //to confirm it has been added to the array
    //     // }
    // }
};

function specialKey(event) {
    console.log('keydown', mode);
    if (event.key === 'm') {
        powerMode = !powerMode;
        let test = $(`#${event.key}`).attr("class").split(' ');
        if (test.includes(cssKeyMap[event.key])) {
            $(`#${event.key}`).removeClass(cssKeyMap[event.key]);
        } else {
            $(`#${event.key}`).addClass(cssKeyMap[event.key]);
        }
    }
    if (event.key === "x") {
        octave = octave + 1;
        return;
    } else if (event.key === "z") {
        octave = octave - 1;
        return;
    }

}


function keyDown(event) {
    let mappedKey = keyMap[event.key];
    let key = event.key;

    if (!keyMap[key]) {
        return specialKey(event);
    }

    if (oscilators[event.key]) {
        return;
    }

    if (mode === 'play') {
        playback();
        return;
    } else if (mode === 'startRecording') {
        console.log('start recording')
        recording = [];
        mode = 'record';
    }
    // console.log("key " + oscilators[event.key]);



    if (mappedKey && mappedKey[0] === "^") {
        octaveChange++;
        key = mappedKey[1];
    }
    //=============_____---------________--------=============//
    // handles when in power mode for cords
    if (!powerMode) {
        // not in power mode

        let freq = noteFreq[octave + octaveChange][keyMap[key]];
        oscilators[key] = playTone(freq);
    } else {
        // in power mode

        let notes = chordMap[key];
        console.log("notes", notes); // ["C", "G"]
        // before add to oscilator we need to verify if the key exists already
        notes.forEach(note => {
            if (note[0] === "^") {
                octaveChange++;
                note = note[1];
            }
            console.log("****CHECKING****", !oscilators[note]);

            if (!oscilators[note]) {
                let freq = noteFreq[octave + octaveChange][note];
                oscilators[note] = playTone(freq);
            }
        });
        console.log(oscilators);
    }


}

function keyUp(event) {
    console.log('powerMode keyUp', powerMode)
    if (powerMode) {
        console.log(oscilators)

        if (chordMap[event.key]) {
            chordMap[event.key].forEach(key => {
                if (key[0] === "^") {
                    octaveChange--;
                    key = key[1];
                }

                let osc = oscilators[key];
                if (osc !== null) {
                    osc.stop();
                    oscilators[key] = null;
                }
            })
        }
    } else {
        var osc = oscilators[event.key];

        if (mode === 'record') {
            recording.push(event.key);
            console.log(recording)


        }
        if (osc) {
            osc.stop();
        }

        oscilators[event.key] = null;
    }
}

function playback() {
    let handle = setInterval(() => {
        if (recording.length === 0) {
            clearInterval(handle);
            return;
        } else {
            let key = recording.shift();
            let osc;

            // decide to turn osc on or off
            if (osc = oscilators[key]) {
                if (osc) {
                    osc.stop();
                }
                oscilators[key] = null;
            } else {
                let freq = noteFreq[octave][keyMap[key]];
                if (freq) {
                    oscilators[key] = playTone(freq);

                }
            }
        }
    }, 125)
}





function playTone(freq) {
    let osc = audioContext.createOscillator();
    osc.connect(masterGainNode);

    let type = wavePicker.options[wavePicker.selectedIndex].value;

    if (type == "custom") {
        osc.setPeriodicWave(customWaveform);
    } else {
        osc.type = type;
    }


    osc.frequency.value = freq;
    osc.start();

    return osc;
}

function changeVolume(event) {
    masterGainNode.gain.value = volumeControl.value;
}

class Keyboard extends Component {


    componentDidMount = () => {

        setup();

        $('document').keydown(event => {
            console.log(event)
            if (cssKeyMap.hasOwnProperty(event.key)) {
                $(`#${event.key}`).addClass(cssKeyMap[event.key])
            } else {
                console.log('hi?');
            }
        });

        $(document).keyup(event => {
            if (keyMap.hasOwnProperty(event.key)) {
                $(`#${event.key}`).removeClass(cssKeyMap[event.key])

            }
        });
    }

    render() {
        console.log('component')
        console.log(this.props.mode)
        mode = this.props.mode;
        if (mode === 'record') {
            mode = 'startRecording';
        } else if (mode === 'play') {
            playback();
        }

        return (
            <div>
                <div className="container">
                    <div className="blackBox"></div>
                    <div class="powerMode" id="m"> Hit 'm' for Power Mode</div>

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
                        <span style={{ color: 'white' }}>Volume: </span>
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
                        <span style={{ color: 'white' }}>Current waveform: </span>
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