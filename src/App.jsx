import React from 'react';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Location from './Components/Travel/Travel';
import Locations from './Components/Travel/Travels';
import NavBar from './Components/NavBar';
import Footer from './Components/homePage/footer';


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
        <Route path='/' element={<Locations />} />
        <Route path='/:id' element={<Location />} />
        <Route path='/:id/edit' element= {<EditTravel />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
  
};
