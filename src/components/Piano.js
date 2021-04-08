import { render } from '@testing-library/react';
import react, { Component, setState } from 'react';

export default class Piano extends Component {
    state = {
        keys: '',
        keyArray: [],

    }
    handleChange = (event, i) => {
        this.setState({ keyArray: event.target.value })
    }


    // updateValue = e => {
    //     this.setState({
    //         keys: e.target.value.pop()
    //     })
    // }
    render() {

        return (
            <>
                <div className="main-piano">
                    <button className="piano-key" value="C" onClick={this.handleChange}>
                        C
            </button>
                    <button className="piano-key" value="D" onClick={this.handleChange}>
                        D
            </button>
                    <button className="piano-key" value="E" onClick={this.handleChange}>
                        E
            </button>
                    <button className="piano-key" value="F" onClick={this.handleChange}>
                        F
            </button>
                    <button className="piano-key" value="G" onClick={this.handleChange}>
                        G
            </button>
                    <button className="piano-key" value="A" onClick={this.handleChange}>
                        A
            </button>
                    <button className="piano-key" value="B" onClick={this.handleChange}>
                        B
            </button>
                </div>
                <div>
                    <p className="output-box"> {this.state.keyArray} </p>
                </div>
            </>
        )
    }

}



