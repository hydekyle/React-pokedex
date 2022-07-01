import logo from './logo.svg';
import './App.css';
import Devpanel from './components/DevPanel/devpanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Devpanel/>
      </header>
    </div>
  );
}

export default App;
