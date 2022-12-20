import logo from './logo.svg';
import React from 'react';
import { useAsync } from 'react';
import './App.css';

// const loadNum = async () =>
//   await fetch("/flavor")
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json());

function App() {
  const [data, setData] = React.useState(null); //null is the initial state here
   const [zdata, zsetData] = React.useState(null);

  //const bruh = majikes();

  // React.useEffect(() => {
  //   fetch("/flavor")
  //     .then((res) => res.json())
  //     .then((zdata) => zsetData(zdata.message));
  //  }, []);


  React.useEffect(() => {
    fetch("/flavor")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/pip")
      .then((res) => res.json())
      .then((zdata) => zsetData(zdata.message));
  }, []);

  console.log(zdata);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

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
