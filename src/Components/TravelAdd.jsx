import React from 'react'
import { useState } from 'react';
import { createTravel } from '../Actions/travel-api';


export default function TravelAdd(){
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput((prevState) => ({...prevState,}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const travel = {
      city: String(e.target.city.value),
      country: String(e.target.country.value),
      description: String(e.target.description.value),
      image: String(e.target.image.value)
    };
    createTravel(travel).then(()=> nav('/travels'));
  };

  return (
    <div>
      <h1>Add Travel</h1>
      <form onSubmit={handleSubmit}>
        <div className='formSyle'>
          
        </div>
      </form>
    </div>
  )
}

