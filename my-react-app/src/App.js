import logo from './logo.svg';
import Posts from "./components/Posts"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sample two site
          Post sharer
        </p>
      </header>
      <Posts />
    </div>
  );
}

export default App;
