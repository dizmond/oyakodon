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
    <div className="App">
      <Login />
    </div>

  </>) :
    (
      <div className="App">
        <button onClick={logout}>Logout</button>
        <Home></Home>
      </div >
    );
}

export default App;
