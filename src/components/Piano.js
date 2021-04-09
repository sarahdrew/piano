// eslint-disable-next-line no-unused-vars
import react, { Component } from 'react';

export default class Piano extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyArray: [],
        }
    }

    //adds to the end of the keyArray that stores the keys on the piano that have been pressed
    updateKey = e => {
        let { keyArray } = this.state;
        keyArray.push(e.target.value);
        this.setState({ keyArray: keyArray });
        this.props.highlightKey(e.target.value);
    }

    render() {
        return (
            <>
                <div className="main-piano">
                    <button className={this.props.activeKey === "C" ? "playing-key" : "piano-key"} value="C" onClick={this.updateKey}>
                        C
            </button>
                    <div className="black-key"></div>
                    <button className={this.props.activeKey === "D" ? "playing-key" : "piano-key"} value="D" onClick={this.updateKey}>
                        D
            </button>
                    <div className="black-key"></div>
                    <button id="e-key" className={this.props.activeKey === "E" ? "playing-key" : "piano-key"} value="E" onClick={this.updateKey}>
                        E
            </button>
                    <button className={this.props.activeKey === "F" ? "playing-key" : "piano-key"} value="F" onClick={this.updateKey}>
                        F
            </button>
                    <div className="black-key"></div>
                    <button className={this.props.activeKey === "G" ? "playing-key" : "piano-key"} value="G" onClick={this.updateKey}>
                        G
            </button>
                    <div className="black-key"></div>
                    <button className={this.props.activeKey === "A" ? "playing-key" : "piano-key"} value="A" onClick={this.updateKey}>
                        A
            </button>
                    <div className="black-key"></div>
                    <button className={this.props.activeKey === "B" ? "playing-key" : "piano-key"} value="B" onClick={this.updateKey}>
                        B
            </button>
                </div>
                <div className="output-box">
                    <p>piano keys played: </p>
                    <div>{this.state.keyArray}</div>
                </div>

            </>
        )
    }

}



