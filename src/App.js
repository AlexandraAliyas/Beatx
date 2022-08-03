//import logo from './logo.svg';
import './App.css';
import Login from './Components/Home/Login/Login';
import AnimateLogo from './Components/Home/Login/AnimateLogo'
import { AuthProvider } from "./contexts/AuthContext"
import Home from './Components/Home/Home';
import Signup from './Components/Home/Signup'
import ForgotPassword from './Components/Home/ForgotPassword';
import Mainframe from './Components/Home/Mainframe'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import { useState, useEffect } from 'react'

function App() {
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