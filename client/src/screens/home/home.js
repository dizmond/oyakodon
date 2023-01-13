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
  const [inputText, setinputText] = React.useState('gengar'); //inputText is the value passed in when the user submits
  //(by pressing enter or the submit button). It is the value called in our image and flavortext functions
  //and initialized currently to 'empoleon' but change that pokemon when you push for fun!
 
  const [pokeName, setPokeName] = React.useState('gengar');
  const [nowPlaying, setNowPlaying] = React.useState(false);
  const [toPlay, setToPlay] = React.useState('');
  //pkm color
  //pkm type
 
  //token
  const [token, setToken] = React.useState("");
 
  const numz = ['song1', 'tune2', 'bop3', 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 
  const [searchedSong, setSearchedSong] = React.useState("")
 
  const [finalList, setFinalList] = React.useState([])
 
  const [Pkmtype, setPkmtype] = React.useState("")
  const [pkmColor, setPkmColor] = React.useState("purple")
  const [bgcolor, setbgcolor] = React.useState("purple")
  const [typeHolder, setTypeHolder] = React.useState(1);
  const [webPlayerId, setWebPlayerId] = React.useState("")
  const [transferActivator, setTransferActivator] = React.useState(0);
  const [webHider, setWebHider] = React.useState(true);
  const [bruh, setBruh] = React.useState(0);
 
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
    await spotifyApi.searchTracks("genre:Pop").then((response) => {

      let copyOfFinalList = finalList; //must create an instance to push onto it 

      for (let i = 0; i < 4; i++) {
        copyOfFinalList = [...copyOfFinalList, response['tracks']['items'][i]['name']]
        //TODO HERE WE CAN GET THE URI AND ID AND STUFF
        
      }
      setFinalList(copyOfFinalList);
    })
  }

  //LIST THE LIST THIS IS FOR DEBUGGING
  React.useEffect(() => {
    //console.log("FINAL")
    console.log(finalList);
  }, [finalList]);
 
  /*-------------------------------------------------------------------------------------------------
  */
  //FLAVOR TEXT
  React.useEffect(() => {
    fetch("/comprehensiveapi/" + inputText) //api call which returns a promise that we handle with the .then
      .then((res) => res.json())
      .then((pokemon) => {
        setText(pokemon.message);
        setId(pokemon.num);
        setPokeName(pokemon.name);
        setPkmColor(pokemon.color['name'])
        setTheImage(pokemon.imageurl)

        //pokemon type
        const tempTypes = pokemon.types;
        if (tempTypes.length == 1) {  //single-typed pokemon
          setTypeHolder(tempTypes[0]['type']['name'])
          console.log(tempTypes[0]['type']['name'])
        }
        else {  //dual-typed pokemon
          setTypeHolder(tempTypes[0]['type']['name']+","+tempTypes[1]['type']['name'])
          console.log(tempTypes[0]['type']['name']+","+tempTypes[1]['type']['name'])
      }


      });
  }, [inputText]); //the brackets are the CONDITIONAL,
  //meaning that whenever the value of inputText is changed, then this function is
  //re-rendered with the new value!
 

 
  React.useEffect(() => {
 
    //this extra step is necessary to avoid race condition or something i don't understand
    // ALL POSSIBLE COLORS: red, blue, yellow, green, black, brown, purple, gray, white and pink
    //red #922E2E
    //Cranberry Sprite
    //console.log("type");
    //console.log(typeHolder);
    switch (pkmColor) {
      case "red":
        setbgcolor("#922E2E");
        break;
      case "blue":
        setbgcolor("#174C87")
        break;
      case "yellow":
        setbgcolor("#CEE851")
        break;
      case "green":
       setbgcolor("#2B8330")
        break;
      case "black":
       setbgcolor("#202220")
        break;
      case "brown":
       setbgcolor("#4C2803")
        break;
      case "purple":
       setbgcolor("#35034C")
        break;
      case "gray":
       setbgcolor("#49464A")
        break;  
      case "white":
       setbgcolor("#DCD7DC")
        break;
      case "pink":
       setbgcolor("#DA63BD")
        break;  
    }
    //setbgcolor(pkmColor);
  }, [id])
 


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
 
  const getSpotifyDevices = async () => {
    await spotifyApi.getMyDevices().then((response) => {
      console.log(response);
      //get the id of the spotify player
      let whileEnder = true;
      let iterator = 0;
      while (whileEnder) {
        //console.log(response['devices'][iterator]['name'])
        if (response['devices'][iterator]['name'] === 'MARUCHAN') {
          setWebPlayerId(response['devices'][iterator]['id']);
          setTransferActivator(transferActivator+1)
          tryTransfer();
          console.log(response['devices'][iterator]['id'])
          //transfer playback
          //await spotifyApi.transferMyPlayback

          whileEnder = false;
          break;
        }
        iterator = iterator + 1;
      }

    })
  }
 
  //change device based on new id
  // React.useEffect(() => {  
  //   console.log('HEREEEE')
  //   console.log(webPlayerId)
  //   //change the player
  //   spotifyApi.transferMyPlayback(webPlayerId).then((response) => {
  //     console.log(response)
  //   })
  // }, [transferActivator]);


  const tryTransfer = async () => {
    console.log('const')
    console.log(webPlayerId)
    // await spotifyApi.transferMyPlayback({"device_ids": [webPlayerId]}).then((response) => {
      await spotifyApi.transferMyPlayback([webPlayerId]).then((response) => {
      console.log(response)
    })

    //console.log("const222");
  }
 
 
  return (
    !token ? (<>
      <Login />
      {/* <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>Login to Spotify</a>
      TODO We should pretty up this page! */}
 
    </>) :
      (
        <div className="App" style={{backgroundColor: `${bgcolor}`}} >

{/* <script src="https://sdk.scdn.co/spotify-player.js"></script> */}
 
 
       {/*   <div
      style={{
        backgroundColor: 'green !important',
      }}
    />
    */}
 
   
          {/*<div className="App" style={{background-color:  change ? ${bgColor}: "#90C0C0"}}>
</div>
 
style="background-color: black !important"
      */}
       
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
            <button onClick={getSpotifyDevices}>GETSPOTIFYDEVICES</button>
 
 
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
 
 
 
              
              {/* activeColor: string;
  altColor: string;
  bgColor: string;
  color: string;
  errorColor: string;
  height: number | string;
  loaderColor: string;
  loaderSize: number | string;
  sliderColor: string;
  sliderHandleBorderRadius: number | string;
  sliderHandleColor: string;
  sliderHeight: number;
  sliderTrackBorderRadius: number | string;
  sliderTrackColor: string;
  trackArtistColor: string;
  trackNameColor: string;
  */}
 
              {/* <Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" /> */}
 
              <p></p>
              <GenerateButton></GenerateButton>
              <p></p>
            </div>
 
            <Outlet />
 
          </header >
          {/* <SpotifyPlayer
                token={token}
                //borderWidth
                name={"MARUCHAN"}
                volume={0.1}
                //border-width='10px'
                styles={{
                  //name: "bruh",
                  // activeColor: `${bgcolor}`,
                  // altColor: `${bgcolor}`,
                  // sliderHandleBorderRadius: 1,
                  // sliderHandleColor: `${bgcolor}`,
                  // sliderHandleBorderRadius: 1,
                  // borderWidth: 30,
                  // volume: 0.1,
                  // height: 0,
                  // sliderHeight: 0,
                  // sliderColor: `${bgcolor}`,
                  // activeColor: `${bgcolor}`,
                  // bgColor: `${bgcolor}`,
                  // color: `${bgcolor}`,
                  // loaderColor: `${bgcolor}`,
                  // sliderColor: `${bgcolor}`,
                  // trackArtistColor: `${bgcolor}`,
                  // trackNameColor: `${bgcolor}`,
                  activeColor: `${bgcolor}`,
                  bgColor: `${bgcolor}`,
                  color: `${bgcolor}`,
                  loaderColor: `${bgcolor}`,
                  sliderColor: `${bgcolor}`,
                  trackArtistColor: `${bgcolor}`,
                  trackNameColor: `${bgcolor}`,
                  visibility: 'hidden'
                }}
               visibility='hidden'
              /> */}

              <div>
                {webHider && <div hidden><SpotifyPlayer
                token={token}
                name={"MARUCHAN"}
                volume={0.1}
                /></div>}
              </div>
           

        </div >
      )
  )
}

