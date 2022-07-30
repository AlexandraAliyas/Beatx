//import logo from './logo.svg';
import './App.css';
import Login from './Components/Home/Login/Login';
import Animate_logo from './Components/Home/Login/Animate_logo.js'
import Home from './Components/Home/Home';
import Signup from './Components/Home/Signup.js'
import Mainframe from './Components/Home/Mainframe.js'
import { useState, useEffect } from 'react'

function App() {
  return (
    <>
     <div>
     <div>
      
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link> */}
    </div> 
  </div>
    <Animate_logo/>
    <Login/>
    <Home/>
    <Signup/>
    <Mainframe/>
    </>
  );
}

export default App;
