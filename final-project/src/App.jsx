import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx'
import About from './components/About.jsx';
import Browse from './components/Browse.jsx';
import Contact from './components/Contact.jsx';
import Help from './components/Help.jsx';
import Login from './components/Login.jsx';
import SignUp from "./components/SignUp.jsx";
import { supabase } from './supabase.js';
import {Header} from "./components/Header.jsx";


function App (){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
            setShowLogin(false)
        }
        }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setShowLogin(false);
    };
    const handleSignUp = () => {
        setShowLogin(false);
    };



    return (
        <Router>
            <div className="App">
                {showLogin ? (
                    isLoggedIn ? (
                        <Login onLogin={handleLogin}/>
                    ):(
                        <SignUp onSignUp={handleSignUp}/>
                        )
                    ):(
                    <>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/browse" element={<Browse />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/help" element={<Help />} />
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
}


export default App;







/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/
