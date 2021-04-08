import react, { Component, setState } from 'react';

export default class Piano extends Component {
    state = {
        keyArray: [],

    }
    //adds to the end of the keyArray that stores the keys on the piano that have been pressed
    updateKey = e => {
        console.log("updateValue started")
        let { keyArray } = this.state;
        keyArray.push(e.target.value);
        this.setState({ keyArray: keyArray });
        console.log('keyArray: ', this.state.keyArray)
    }


    render() {

        return (
            <>
                <div className="main-piano">
                    <button className="piano-key" value="C" onClick={this.updateKey}>
                        C
            </button>
                    <button className="piano-key" value="D" onClick={this.updateKey}>
                        D
            </button>
                    <button className="piano-key" value="E" onClick={this.updateKey}>
                        E
            </button>
                    <button className="piano-key" value="F" onClick={this.updateKey}>
                        F
            </button>
                    <button className="piano-key" value="G" onClick={this.updateKey}>
                        G
            </button>
                    <button className="piano-key" value="A" onClick={this.updateKey}>
                        A
            </button>
                    <button className="piano-key" value="B" onClick={this.updateKey}>
                        B
            </button>
                </div>
                <div>
                    <div className="output-box">{this.state.keyArray}</div>
                </div>

            </>
        )
    }

}



