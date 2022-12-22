import logo from './logo.svg';
import React from 'react';
import styled from 'styled-components';
import Link from './components/link/Link';
import './App.css';
import SearchBar from './components/searchBar/SearchBar'

import NumberList from './components/playlist/NumberList';
import InputSearch from './components/playlist/inputSearch';
import { testexport } from './components/playlist/ZSubmitButton';



function App() {

  //PLACEHOLDER ARGUMENT FOR LIST OF SONGS
  const numz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  const [cheri, setCheri] = React.useState(null);  //used for berry 
  const [pip, setPip] = React.useState(null); //used for flavor text
  const [theImage, setTheImage] = React.useState(null); //used to fetch image


  React.useEffect(() => {
    fetch("/cheri")
      .then((res) => res.json())
      .then((cheri) => setCheri(cheri.message));
  }, []);

  React.useEffect(() => {
    const pkmname = "luxray"
    //TODO CHANGE THIS PKMNNAME TO ANOTHER  POKEMON
    fetch("/piplup/" + pkmname)
      .then((res) => res.json())
      .then((pip) => setPip(pip.message));
  }, []);

  React.useEffect(() => {
    const pkmname = "luxray"
    //TODO CHANGE THIS PKMNNAME TO ANOTHER POKEMON U WANNA SEE
    fetch("/tempimage/" + pkmname)
      .then((res) => res.json())
      .then((theImage) => setTheImage(theImage.message));
  }, []);



  //trying to read input
  const [inputText, setinputText] = React.useState('ayeo');

  let zhandleChange = (event) => {
    event.preventDefault();

    setinputText(event.target.value.toLowerCase())
    console.log("gottem")
  }

//   handleEntailmentRequest(e) {
//     e.preventDefault();

//     console.log("handle request ");
// }


  return (
    <div className="App">
      <header className="App-header">
      <img src = {theImage} alt="testimage" height ={325} width={325} />
        <p>{cheri}</p>
        <div>
          <InputSearch
          onChange={zhandleChange}
          ></InputSearch>
        </div>
        <p>{testexport}</p>               
        <p>{pip}</p>
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
