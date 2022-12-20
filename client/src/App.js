import logo from './logo.svg';
import React from 'react';
import { useAsync } from 'react';
import './App.css';

// const loadNum = async () =>
//   await fetch("/flavor")
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json());

function App() {

   const [cheri, setCheri] = React.useState(null);
   const [pip, setPip] = React.useState(null);


  React.useEffect(() => {
    fetch("/cheri")
      .then((res) => res.json())
      .then((cheri) => setCheri(cheri.message));
  }, []);

  React.useEffect(() => {
    const pkmname = "pikachu"
    fetch("/piplup/"+pkmname)
      .then((res) => res.json())
      .then((pip) => setPip(pip.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{cheri}</p>
        <p>{pip}</p>
      </header>
    </div>
  );
}

export default App;
