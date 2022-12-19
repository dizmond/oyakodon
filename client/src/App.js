import logo from './logo.svg';
import React from 'react'
import './App.css';

import Pokedex from 'pokedex-promise-v2';
//import {ztestt, ztest, asynccall, zasynccall} from './testpkm'

//const bruh = zasynccall()

function App() {
  const [data, setData] = React.useState(null);
  const [zdata, zsetData] = React.useState(null);


  React.useEffect(() => {
    fetch("/flavor")
      .then((res) => res.json())
      .then((zdata) => zsetData(zdata.message));
  }, []);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{zdata}</p>
      </header>
    </div>
  );
}

export default App;
