import React from 'react'
import Navbar1 from './Navbar1'
import Home from './Home'
import About from './About'
import { BrowserRouter, Route } from 'react-router-dom'
const Home1 = () => {
    return (
        <BrowserRouter>

            <Navbar1 />
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/About">
                <About />
            </Route>

        </BrowserRouter>
    )
}

export default Home1
