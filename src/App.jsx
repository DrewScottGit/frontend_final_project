import React from 'react';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/homePage/footer';
import Travels from './Components/Travel/Travels';
import Travel from './Components/Travel/Travel';
import TravelEdit from './Components/Travel/TravelEdit';


export default function App(){

  return(
    <div>
      <header>
        <nav>
          <h1>Travel Companion</h1>
          <Link className='about' to='/about'>About</Link>
        </nav>
      </header>
      <Router>
        <NavBar />
        <Routes>
        <Route path='/' element={<Travels />} />
        <Route path='/:id' element={<Travel />} />
        <Route path='/:id/edit' element= {<TravelEdit />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
  
};
