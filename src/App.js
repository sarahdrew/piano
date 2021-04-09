import { Component } from 'react';
import './App.css';
import Piano from './components/Piano';
import TextBox from './components/TextBox';

export default class App extends Component {
  state = {
    activeKey: null
  }

  setActiveKey(key) {
    this.setState({ activeKey: key })
  }

  //have the key that has been pressed or called to be played be set as active for one second so that it highlights
  highlightKey(key) {
    this.setActiveKey(key)
    const keyTimeout = setTimeout(() => {
      this.setActiveKey(null)
      clearTimeout(keyTimeout)
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header>
          PIANO
        </header>
        <Piano activeKey={this.state.activeKey} highlightKey={this.highlightKey.bind(this)} />
        {/* <Piano activeKey={this.state.activeKey} highlightKey={this.highlightKey.bind(this)} /> */}
        <TextBox setActiveKey={this.setActiveKey.bind(this)} />
      </div>
    );
  }

}


