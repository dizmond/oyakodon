import React from 'react';
import './App.css';
import Home from './screens/home/home';
import Login from "./screens/auth/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playlist from './screens/playlist/playlist';


function App() {
  //the idea is that App ONLY routes stuff
  //rn I'm just trying to nest stuff into the <Home/> component and make that 
  //the default route
  //NOT SURE but I think routes are relative to App.js, NOT the path relative to the sub component calling that path
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home style/>}>
          <Route path='/playlist' element={<Playlist />} />

        </Route>
      </Routes>
    </BrowserRouter>

    //end of return
  );


}

export default App;
