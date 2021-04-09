import React, { Component } from 'react';

export default class TextBox extends Component {
    state = {
        textBoxKeys: [],
        textboxInput: '',
    }
    //transform to uppercase
    //iterate through input in textbox 
    //use timeout function to change the class in JSX of Piano component
    //add error handling so input can only be keys in piano
    //add array.join(',') if the textbox isn't in the right format

    updateKeyInputs(e) {
        this.setState({ textboxInput: e.target.value })
    }

    parseKeys(keyString) {
        return keyString.split(',');
    }

    playKeys(e) {
        console.log("playKeys has been clicked")
        //this.state.textBoxKeys.push(e.target.value)
        console.log("textboxInput: ", this.state.textboxInput)
        const keys = this.parseKeys(this.state.textboxInput);
        console.log("keys ", keys)
        this.beginKeySequence(keys)
        //iterate over the keys and check for the keys below
        //let isValid= true
        //loop through, isValid is false,
        //only call beginKeySequence iif iit's true
        // if (this.state.key !== 'C' || 'D' || 'E' || 'F' || 'G' || 'A' || 'B') {
        //     return console.error("Must choose key on piano");
        // }
        // else {
        //     this.state.textBoxKeys.map((key) => {
        //         //for each key that is iterated through,
        //         //change class of JSX of piano for one second, & keep moving through list
        //         return 'playing-key';
        //     })
        // }
    }


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

    render() {
        return (
            <div className="textbox-and-play-container" >
                <input className="textbox" type="text" placeholder="enter keys of piano" onChange={this.updateKeyInputs.bind(this)}></input>
                {/* button will iterate through textbox to play sequence */}
                <button onClick={this.playKeys.bind(this)} > PLAY</button>
            </div >



        )
    }
}