import GenerateButton from '../../components/buttons/GenerateButton'
import PokemonSearch from '../../components/search/PokemonSearch';
import ImageCard from '../../components/imageformat/ImageCard';
import React from 'react';
import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js";
import Login from '../auth/login';
import { BrowserRouter, Link, Route, Routes, Switch, Outlet } from "react-router-dom";
import Spotify from 'react-spotify-embed' //PROB OUTDATED
import SpotifyPlayer from 'react-spotify-web-playback';
import SongCard from '../../components/playlist/SongCard';
export default function Home() {

  const spotifyApi = new SpotifyWebApi();
  //spotify stuff
  // const [token, setToken] = React.useState("");
  const [searchKey, setSearchKey] = React.useState("");
  const [tracks, setSongs] = React.useState([]);

  const [id, setId] = React.useState(395);
  const [text, setText] = React.useState(null); //used for flavor text
  const [theImage, setTheImage] = React.useState(null); //used to fetch image

  //input stuff
  const [holderInputText, setholderInputText] = React.useState('notext'); //a holder for the input - is written to on every keystroke!
  const [inputText, setinputText] = React.useState('empoleon'); //inputText is the value passed in when the user submits 
  //(by pressing enter or the submit button). It is the value called in our image and flavortext functions
  //and initialized currently to 'empoleon' but change that pokemon when you push for fun!

  const [pokeName, setPokeName] = React.useState('empoleon');
  const [nowPlaying, setNowPlaying] = React.useState(false);
  const [toPlay, setToPlay] = React.useState('');

  //token
  const [token, setToken] = React.useState("");

  const numz = ['song1', 'tune2', 'bop3', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  //controller keywords for player:


  // //spotify
  // const logout = () => {
  //     setToken("");
  //     window.localStorage.removeItem("token");
  // }


  // const searchSongs = async (e) => {
  //     e.preventDefault();
  //     const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //         headers: {
  //             Authorization: `Bearer ${token}`
  //         },
  //         params: {
  //             q: searchKey,
  //             type: "track"
  //         }
  //     })

  //     console.log(data);
  //     setSongs(data.tracks.items);
  // }
  /*
  -----------------------------------------------------------------------------------------------------
  Umi's Spotify Code Below
  */
  const getNowPlaying = async () => {
    await spotifyApi.getMyCurrentPlaybackState().then((response) => {
      console.log(response);
      setNowPlaying({
        name: response.item.name,
        albumArt: response.item.album.images[0].url
      })
    })
  }

  const playerPause = async () => {
    await spotifyApi.pause().then((response) => {
      console.log(response);
    })
  }

  const playerPlay = async () => {
    await spotifyApi.play().then((response) => {
      console.log(response);
    })
  }

  const playParticular = async () => {
    await spotifyApi.queue("spotify:track:4iV5W9uYEdYUVa79Axb7Rh").then((response) => {
      console.log(response);
    })
  }

  const zPlay = async () => {
    await spotifyApi.queue("spotify:track:4iV5W9uYEdYUVa79Axb7Rh").then((response) => {
      console.log(response);
    })
    await spotifyApi.skipToNext().then((response) => {
      console.log(response);
    })
  }

  /*-------------------------------------------------------------------------------------------------
  */
  //FLAVOR TEXT
  React.useEffect(() => {
    fetch("/flavor/" + inputText) //api call which returns a promise that we handle with the .then
      .then((res) => res.json())
      .then((pokemon) => {
        setText(pokemon.message);
        setId(pokemon.num);
        setPokeName(pokemon.name);

      });
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
    setholderInputText(e.target.value.toLowerCase()); //actively stores the val of the input
    //console.log(holderInputText);
    //lowercase is important here! 
    console.log(e.target.value.toLowerCase());
    console.log("inputGrabbed");
  };


  //changes the value of inputText (which is used for a lot right now!) when the user submits the data 
  let inputSubmitted = (e) => {
    e.preventDefault(); //prevents reloading of the page! Very important!!
    setinputText(holderInputText); //sets the val of this (to be entered maybe?)
    console.log("inputSubmitted");
    //render????
  };

  React.useEffect(() => {  //GETTING THE USER'S TOKEN AND LOGIN
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = "";
      window.localStorage.setItem("token", token)
    }

    setToken(token);
    //setClientToken(token); //importing this function from spotify.js *RaghavShubham
    spotifyApi.setAccessToken(token); //check token is set with test
    spotifyApi.getMe().then((user) => {
      console.log(user);
    });
    console.log("THE TOKEN : " + token);
  }, []);

  //spotify
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }




  return (
    !token ? (<>
      <Login />
      {/* <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>Login to Spotify</a> */}

    </>) :
      (
        <div className="App">
          <header className="App-header">
            <button onClick={logout}>Logout</button>
            <p></p >
            <ImageCard number={id} name={pokeName} src={theImage} height={270} width={270} description={text}></ImageCard>

            <div>
              Now Playing: {nowPlaying.name}
            </div>
            <button onClick={getNowPlaying}>Check Now Playing</button>
            <button onClick={playerPause}>Pause</button>
            <button onClick={playerPlay}>Play</button>
            <button onClick={playParticular}>Moonlight</button>
            <button onClick={zPlay}>ZPLAY</button>


            < p > Enter a pokemon!</p>
            <div>
              <PokemonSearch
                onChange={(e) => inputGrabber(e)} //actively stores the val of the input
                onSubmit={(e) => inputSubmitted(e)}  //prevents reloading and changes the real value 
              >
              </PokemonSearch>
            </div>
            {/*   <p>{inputText}</p> */}

            <div>



              <SpotifyPlayer
                token={token}
                uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
                styles={{
                  activeColor: '#fff',
                  bgColor: '#333',
                  color: '#fff',
                  loaderColor: '#fff',
                  sliderColor: '#1cb954',
                  trackArtistColor: '#ccc',
                  trackNameColor: '#fff',
                }}
              />


              <Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />

              <p></p>
              <GenerateButton></GenerateButton>
              <p></p>
            </div>

            <Outlet />

          </header >
        </div >
      )
  )
}