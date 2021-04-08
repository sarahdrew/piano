import './App.css';
import Piano from './components/Piano';
import TextBox from './components/TextBox';
import KeyOutput from './components/KeyOutput';

function App() {
  return (
    <div className="App">
      <Piano />
      <KeyOutput />
      <TextBox />
    </div>
  );
}

export default App;
