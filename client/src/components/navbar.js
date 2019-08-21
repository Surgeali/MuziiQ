import React, { Component } from "react";


class NavBar extends Component {

    styles = {
        // jumbotron: {
        //     // backgroundImg: {
        //     //   backgroundImage: `url("https://img.pixers.pics/pho_wat(s3:700/FO/45/73/84/54/700_FO45738454_d399959d5a4bf8fa6ec39730a35ebcb0.jpg,583,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,363,650,jpg)/wall-murals-abstract-music-volume-equalizer-concept-idea-background.jpg.jpg")`,
        //     height: '100%',
        //     width: '100%',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover'
        // },
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

        // jumbotron: {
        //     float: 'left'

        // }
    }

    render() {
        return (
            <div>
                <div style={this.styles.jumbotron}>

                    <div>
                        <h1 style={{ color: 'white' }}>Markable Music</h1>
                        <h5 style={{ color: 'white' }}>Make it sound remarkable</h5>
                    </div>
                    <div style={this.styles.menu} id="menu">

                        <p>BPM</p>
                        <p>0:00</p>

                        <button id="record" onClick={this.props.recordPressed}>Record</button>
                        <button id="start" onClick={this.props.playPressed}>Play</button>
                        <button id="stop" onClick={this.props.stopPressed}>Stop</button>
                        <button id = "save" onClick={this.props.savePressed}>Save</button>
                        <button href="../src/App.js">Logout</button>
                    </div>
                </div>
            </div>



        );
    }
}
export default NavBar;