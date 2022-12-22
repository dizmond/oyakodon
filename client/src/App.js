import logo from './logo.svg';
import React from 'react';
import styled from 'styled-components';
import Link from './components/link/Link';
import './App.css';
import SearchBar from './components/searchBar/SearchBar'

import NumberList from './components/playlist/NumberList';




function App() {

  //PLACEHOLDER ARGUMENT FOR LIST OF SONGS
  const numz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  const [cheri, setCheri] = React.useState(null);
  const [pip, setPip] = React.useState(null);
  const [theImage, setTheImage] = React.useState(null);


  React.useEffect(() => {
    fetch("/cheri")
      .then((res) => res.json())
      .then((cheri) => setCheri(cheri.message));
  }, []);

  React.useEffect(() => {
    const pkmname = "ponyta"
    //TODO CHANGE THIS PKMNNAME TO ANOTHER SINNOH POKEMON
    fetch("/piplup/" + pkmname)
      .then((res) => res.json())
      .then((pip) => setPip(pip.message));
  }, []);

  React.useEffect(() => {
    const pkmname = "ponyta"
    //TODO CHANGE THIS PKMNNAME TO ANOTHER SINNOH POKEMON
    fetch("/tempimage/" + pkmname)
      .then((res) => res.json())
      .then((theImage) => setTheImage(theImage.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>{cheri}</p>
        <p>{pip}</p>
        <img src = {theImage} alt="testimage" height ={100} width={100} />
        <div>
          <SearchBar></SearchBar>
        </div>
        <div>
          <NumberList vals = {numz}></NumberList>
        </div>
      </header>
    </div>
  );
}

export default App;
