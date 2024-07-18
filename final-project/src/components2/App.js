import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Home from './Home.js";
import Auth from '../components/Auth.js';
import Navigation from '../components/Navigation.js';
import About from '../components/About.js';
import Browse from '../components/Browse.js';

function App (){
    const [isLoggedIn, setIsLoggedIn] = useState();

    return (
        <Router>
            <div className="app">
                {!isLoggedIn ? (
                    <Auth setIsLoggedIn={setIsLoggedIn} />
                ) : (
                    <>
                        <Navigation />
                        <Routes>
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/browse" component={Browse} />
                            <Route path="/contact" component={() => <div>Contact</div>} />
                            <Route path="/help" component={() => <div>Help</div>} />
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;

