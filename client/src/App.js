import logo from './logo.svg';
import React from 'react'
import './App.css';
import {ztestt} from './testpkm'

const bruh = ztestt()

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{ztestt()}</p>
      </header>
    </div>
  );
}

export default App;
