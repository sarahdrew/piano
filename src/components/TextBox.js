import React, { Component } from 'react';

export default class TextBox extends Component {
    state = {
        textBoxKeys: [],
        textboxInput: '',
    }

    updateKeyInputs(e) {
        this.setState({ textboxInput: e.target.value })
    }

    //calling setActiveKey from App.js to highlight each key one at a time in sequence 
    beginKeySequence(keys) {
        let keyIndex = 0;
        this.props.setActiveKey(keys[keyIndex]);
        const keyTimeout = setInterval(() => {
            keyIndex++
            if (keys.length > keyIndex) {
                this.props.setActiveKey(keys[keyIndex])
            }
            else {
                clearInterval(keyTimeout)
                this.props.setActiveKey(null)
            }

        }, 1000);
    }

    //parse the keys to read the entered comma
    parseKeys(keyString) {
        return keyString.split(',');
    }

    //read the parsed keys and use beginKeySequence to highlight the sequence of keys in order
    playKeys(e) {
        const keys = this.parseKeys(this.state.textboxInput);
        this.beginKeySequence(keys)
        //error validation -- input to textbox must include keys as seen on piano, otherwise throw an alert explaining how to format textbox
        if (this.state.textboxInput.includes('C' || 'D' || 'E' || 'F' || 'G' || 'A' || 'B')) {
        }
        else {
            alert("Input must be comma delimited string. Please use capital letters that correspond with the keys on the piano and separate using only a comma. Example: D,C,F,G")
        }
    }



    render() {
        return (
            <div className="textbox-and-play-container" >
                <input className="textbox" type="text" placeholder="enter keys of piano" onChange={this.updateKeyInputs.bind(this)}></input>
                {/* button will iterate through textbox to play sequence */}
                <button className="play-button" onClick={this.playKeys.bind(this)} > PLAY</button>
            </div >



        )
    }
}