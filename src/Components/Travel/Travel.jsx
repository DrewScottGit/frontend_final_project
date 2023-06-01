import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import {getLocation, deleteTravel} from '../../Services/travel-api';

export default function Travel(){
  const  [travel, setLocation] = useState([]);
  const nav = useNavigate();
  const {id} = useParams();
  const [requestData, setRequestData] = useState({});

  useEffect(()=> {
    getLocation(id).then(res => setLocation(res.data))
  }, [requestData])

  useEffect(() => {
    setRequestData({})
  }, [id]);

  const deleteATravel = () => {
    deleteTravel(id)
    nav('/')
  };

return (
  <div>
    <div>
      <h2>Travel</h2>
      <h3>{travel.city}{travel.country}{travel.description}{travel.image}</h3>
      <h3>lorum ipsum</h3>
      <button onClick={deleteATravel}>Delete</button>
      <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button>
      <button onClick={()=>{nav('/')}}>Main</button>
    </div>
  </div>
)
  
}

