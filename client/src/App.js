import React from 'react';
import './App.css';
import Home from './screens/home/home';
// import axios from 'axios';
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./screens/auth/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { setClientToken } from '../../spotify';

const spotifyApi = new SpotifyWebApi();

function App() {
  //spotify stuff
  const [token, setToken] = React.useState("");

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


  return !token ? (<>
    <Login />
    {/* <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>Login to Spotify</a> */}

  </>) :
    (
      <div className="App">
        <header>
        </header >
        <body>
          <button onClick={logout}>Logout</button>
          <Home></Home>
        </body>
      </div >
    );
}

export default App;
