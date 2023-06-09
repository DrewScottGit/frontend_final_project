import { getLocations } from '../../Services/travel-api';
import {useState, useEffect} from 'react';
import TravelAdd from '../Travel/TravelAdd';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';


export default function Travels() {
    const nav = useNavigate();
    const [travels, setTravels] = useState([])
    const [requestData, setRequestData] = useState({});

    useEffect(()=> {
        getLocations()
        getLocations().then(res=> setTravels(res.data))
    }, [requestData])

    useEffect(() => {
        setRequestData()
    }, [])

    return(
        <div>
            <div>
                <h2>Citys</h2>
                {travels.map((travel) => {
                    const deleteATravel = () =>{
                        setRequestData();
                        deleteATravel(travels._id);
                    } 

                    let links={
                        link: `${travel.city}`,
                    }
                    if(travel.city || travel.country){
                        return (
                            <div>
                                <div><h2>{travel.city}</h2></div>
                                <div><a href={links.link}>{travel.city}</a></div>
                                <button onClick={()=>{nav(`/${travel._id}/edit`)}}>Edit</button>
                                <button onClick={deleteATravel}>Delete</button>
                            </div>
                        )
                    }
                })}
            </div>
            <div>
            <h2>Countrys</h2>
                {travels.map((travel) => {
                    const deleteATravel = () =>{
                        setRequestData(new travel());
                        deleteATravel(travels._id);
                    } 

                    let links={
                        link: `${travel.country}`,
                    }
                    if(travel.country){
                        return (
                            <div>
                                <div><a href={links.link}>{travel.country}</a></div>
                                <button onClick={()=>{nav(`/${travel._id}/edit`)}}>Edit</button>
                                <button onClick={deleteATravel}>Delete</button>
                            </div>
                        )
                    }
                })}
            </div>
            <TravelAdd />
        </div>
    )
}