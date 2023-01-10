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
  //pkm color 
  //pkm type

  //token
  const [token, setToken] = React.useState("");

  const numz = ['song1', 'tune2', 'bop3', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  const [searchedSong, setSearchedSong] = React.useState("")

  const [finalList, setFinalList] = React.useState(['1','2','3','4','5'])

  const [Pkmtype, setPkmtype] = React.useState("")
  const [pkmColor, setPkmColor] = React.useState("blue")
  const [backgroundColor, setBackgroundColor] = React.useState("")

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

  //pauses the spotify player
  const playerPause = async () => {
    await spotifyApi.pause().then((response) => {
      console.log(response);
    })
  }
  //resumes the spotify player
  const playerPlay = async () => {
    await spotifyApi.play().then((response) => {
      console.log(response);
    })
  }

  //this is a work in progress, I'd like to pass an argument to this but IDK HOW
  //Right now, it adds the songs 'Moonlight' to the user's spotify queue
  //TODO allow this to accept a PARAMETER
  const playParticular = async () => {
    await spotifyApi.queue("spotify:track:4iV5W9uYEdYUVa79Axb7Rh").then((response) => {
      console.log(response);
    })
  }

  //this adds 'moonlight' to the spotify queue then skips to it (TODO what if they already have a queue??) then plays it
  const zPlay = async () => {
    await spotifyApi.queue("spotify:track:4iV5W9uYEdYUVa79Axb7Rh").then((response) => {
      console.log(response);
    })
    await spotifyApi.skipToNext().then((response) => {
      console.log(response);
    })
    await spotifyApi.play().then((response) => {
      console.log(response);
    })
  }

  //playground
  //search for stuff
  //https://developer.spotify.com/documentation/web-api/reference/#/operations/search
  //"remaster%20track:Doxy%20artist:Miles%20Davis"
  //"swimming%20track:Ladders%20artist:Mac%20Miller"
  //"%20track:The%20Race%20artist:Tay-k"

  //this yields the ID of a given QUERY 
  //This plays "Ladders" by Mac Miller
  const playground = async () => {
    await spotifyApi.searchTracks("swimming%20track:Self%20Care%20artist:Mac%20Miller").then((response) => {
      console.log(response);
      console.log(response['tracks']['items'][0]['uri']);
      setSearchedSong(response['tracks']['items'][0]['uri'])
    })
  }

  const playSearched = async () => {
    await spotifyApi.queue(searchedSong).then((response) => {
      console.log(response);
    })
    await spotifyApi.skipToNext().then((response) => {
      console.log(response);
    })
    await spotifyApi.play().then((response) => {
      console.log(response);
    })
  }

  const createConsoleList = async () => {
    //await spotifyApi.getTracks() //WITH THE TRACK ID
    await spotifyApi.searchTracks("%genre:Pop").then((response) => {
      console.log("CCL:");
      console.log(response);
      for (let i = 0; i < 4; i++) {
        //setFinalList(finalList.concat(response['tracks']['items'][i]['uri']))
        console.log(response['tracks']['items'][i]['uri'])
      }
      //end for loop
      console.log("theList");
      console.log(finalList);
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

        console.log("FLAVV");
        console.log(pokeName)
        //console.log(pokemon.types);  //TODO THIS ISN'T WORKING
        //console.log(pokemon.color['name']);
        setPkmColor(pokemon.color['name'])
        console.log(pkmColor)

        //setPkmColor(pokemon.color);
        //setPkmtype(pokemon.type);
        //console.log(pkmColor);
        //console.log(Pkmtype);

      });
  }, [inputText]); //the brackets are the CONDITIONAL, 
  //meaning that whenever the value of inputText is changed, then this function is 
  //re-rendered with the new value!

  React.useEffect(() => {
    //JOLLYRANCHER
    setBackgroundColor("SHOULD CONTRAST: " + pkmColor);
    //console.log("BACKGROUND")
    console.log(backgroundColor);
  }, [pkmColor])

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
      {/* <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>Login to Spotify</a>
      TODO We should pretty up this page! */}

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
            <button onClick={createConsoleList}>Create Console List</button>
            <button onClick={playerPause}>Pause</button>
            <button onClick={playerPlay}>Play</button>
            <button onClick={playParticular}>Moonlight</button>
            <button onClick={zPlay}>ZPLAY</button>
            <button onClick={playground}>playground</button>
            <button onClick={playSearched}>PLAYSEARCHED</button>


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