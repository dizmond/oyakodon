import logo from './logo.svg';
import React from 'react';
import styled from 'styled-components';
import Link from './components/link/Link';
import './App.css';
import SubmitButton from './components/searchBar/SubmitButton'


import NumberList from './components/playlist/NumberList';
import InputSearch from './components/playlist/inputSearch';
import OurImage from './components/imageformat/imageformat';

//these might be important later but also might be outdated by use-hooks??
//import { createRoot } from 'react-dom/client';
//import { render } from 'react-dom';


function App() {


  const [pip, setPip] = React.useState(null); //used for flavor text
  const [theImage, setTheImage] = React.useState(null); //used to fetch image

  //input stuff
  const [holderInputText, setholderInputText] = React.useState('notext'); //a holder for the input - is written to on every keystroke!
  const [inputText, setinputText] = React.useState('empoleon'); //inputText is the value passed in when the user submits 
  //(by pressing enter or the submit button). It is the value called in our image and flavortext functions
  //and initialized currently to 'empoleon' but change that pokemon when you push for fun!


  //FLAVOR TEXT
  React.useEffect(() => {
    fetch("/flavor/" + inputText) //api call which returns a promise that we handle with the .then
      .then((res) => res.json())
      .then((pip) => setPip(pip.message));
  }, [inputText]); //the brackets are the CONDITIONAL, 
  //meaning that whenever the value of inputText is changed, then this function is 
  //re-rendered with the new value!

  //THE IMAGE
  React.useEffect(() => {
    fetch("/tempimage/" + inputText)  //api call which returns a promise that we handle with the .then
      .then((res) => res.json())
      .then((theImage) => setTheImage(theImage.message));
  }, [inputText]);//the brackets are the CONDITIONAL, 
  //meaning that whenever the value of inputText is changed, then this function is 
  //re-rendered with the new value!



  //this changes the value of holderInputText to the value of the input whenever the user enters a new character
  //we can't call it directly bc it has incomplete input
  //but it was the only way I could find to store the input!!
  let inputGrabber = (e) => {
    setholderInputText(e.target.value.toLowerCase()) //actively stores the val of the input
    //console.log(holderInputText);
    //lowercase is important here! 
    console.log("inputGrabbed")
  }


  //changes the value of inputText (which is used for a lot right now!) when the user submits the data 
  let inputSubmitted = (e) => {
    e.preventDefault(); //prevents reloading of the page! Very important!!
    setinputText(holderInputText) //sets the val of this (to be entered maybe?)
    console.log("inputSubmitted")
    //render????
  }

  //PLACEHOLDER ARGUMENT FOR LIST OF SONGS
  const numz = ['song1', 'song2', 'song3', 'song', 'song', 'song', 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <div className="App">
      <header className="App-header">
        <img src={theImage} height={325} width={325} />

        {/* <OurImage src = {theImage}></OurImage> */}


        <p>Enter a pokemon!</p>
        <div>
          <InputSearch
            onChange={(e) => inputGrabber(e)} //actively stores the val of the input
            onSubmit={(e) => inputSubmitted(e)}  //prevents reloading and changes the real value 
          >
          </InputSearch>
        </div>
        {/*   <p>{inputText}</p> */}
        <p>{pip}</p>
        <div>
          <SubmitButton></SubmitButton>
        </div>
        <div>
          <NumberList vals={numz}></NumberList>
        </div>
      </header>
    </div>
  );
}

export default App;
