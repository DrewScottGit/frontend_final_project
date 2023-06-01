import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import {getOneLocation, deleteTravel} from '../../Services/travel-api';

export default function Travel(){
  const  [travel, setTravel] = useState([]);
  const {id} = useParams();
  useEffect(()=> {
    getOneLocation(id).then(res => setTravel(res.data))
  }, [id])

return (
  <div>
    <div>
      <h2><Link to={travel.img}></Link></h2>
      <h3>{travel.description}</h3>
      <h3>lorum ipsum</h3>
    </div>
  </div>
)
  
}

