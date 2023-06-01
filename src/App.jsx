import React from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/homePage/About';
import Footer from './Components/homePage/footer';
import TravelAdd from './Components/TravelAdd';
import TravelUpdate from './Components/Travel/TravelUpdate'

export default function App(){

  return(
    <div>
      <header>
        <nav>
          <Link className='icon' to='/'>Travel Companion</Link>
          <Link className='about' to='/about'>About</Link>
        </nav>
      </header>
      <Router>
        <NavBar />
        <Routes>
        <Route path='/' element={Home}></Route>
        <Route path='/about' element={About}></Route>
        <Route path='/TravelAdd' element={TravelAdd}></Route>
        <Route path='/TravelUpdate' element={TravelUpdate}></Route>
        
        </Routes>
      </Router>
      <Footer />
    </div>
  )
  
};
