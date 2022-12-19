import logo from './logo.svg';
import React from 'react';
import './App.css';

//import {majikes, dothing, ayyo, prasun} from './testpkm.js';

// const bruh = prasun();
// if (bruh==60) {
//   console.log("ayyo")
// } else {
//   console.log(bruh)
// }

function App() {
  const [data, setData] = React.useState(null);
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
