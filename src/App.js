import { Component } from 'react';
import './App.css';
import Piano from './components/Piano';
import TextBox from './components/TextBox';

export default class App extends Component {
  state = {
    activeKey: null
  }

  togglePlaying(key) {
    this.setState({ keyPlaying: !this.state.keyPlaying })
  }

  highlightKey(key) {
    const keyTimeout = setTimeout(() => { this.togglePlaying(key) }, 1000);
    clearTimeout(keyTimeout)
  }

  render() {
    return (
      <div className="App">
        <header>
          PIANO
        </header>
        <Piano togglePlaying={this.togglePlaying} highlightKey={this.highlightKey} />
        <TextBox />
      </div>
    );
  }

}


