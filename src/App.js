//import logo from './logo.svg';
import './App.css';
import Login from './Components/Home/Login/Login';
import AnimateLogo from './Components/Home/Login/AnimateLogo'
import { AuthProvider } from "./contexts/AuthContext"
import Home from './Components/Home/Home';
import Signup from './Components/Home/Signup'
import ForgotPassword from './Components/Home/ForgotPassword';
import Mainframe from './Components/Home/Mainframe'
import {useDispatch, useSelector} from "react-redux";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React, { useState, useEffect } from 'react'
import {setPlaylist} from "./actions/actions";
import musicDB from "./db/music";
import MusicHome from './Components/Pages/MusicHome';
import Heartbeat from './Components/Home/Heartbeat';
import Developer from './Components/fragment/Developer';
import About from './Components/Pages/About';
import Search from './Components/Pages/Search';
import MusicCardContainer from "./Components/fragment/MusicCardContainer"

function App() {

 
  const {language} = useSelector(state => state.musicReducer);

  const dispatch = useDispatch();
  useEffect(()=>{
      if (language == null || language.includes("any")){
          dispatch(setPlaylist(musicDB))
      }
      else if (language.includes('hindi')){
          alert("No hindi tracks available")
      } else {
          let x = musicDB.filter((item)=>(
              item.lang && language.includes(item.lang.toLowerCase())
          ))
          dispatch(setPlaylist(x))
      }
  },[dispatch, language]);

  return (
    <>
    

      <Router>

        <AuthProvider>
          <Routes>

            <Route path="/" element={<AnimateLogo/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/mainframe" element={<Mainframe/>} />
            <Route path="/musichome" element={<MusicHome/>} >
              <Route path="/musichome/home" element={< MusicHome/>} />
              <Route path="/musichome/about" element={< MusicHome/>} />
              <Route path="/musichome/search" element={< MusicHome/>} />
              <Route path="/musichome/playlist/happy" element={< MusicHome/>} />
              <Route path="/musichome/playlist/sad" element={< MusicHome/>} />
              {/* <Route path="/musichome/profile" element={< About/>} /> */}
            </Route>
            <Route path="/heartbeat" element={<Heartbeat/>} />
            {/* <Route path="/home/about" element={<Developer/>} /> */}
          </Routes>
        </AuthProvider >
      </Router>

    </ >
  )
}

export default App;



{/* <AuthProvider>

<div>
  <div>

  </div>
</div>

<AnimateLogo />
<Login />
<Signup />
<Home />

<Mainframe />
</AuthProvider > */}
{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link> */}