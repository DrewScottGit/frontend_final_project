import axios from "axios";
const API_URL = "https://localhost:3001/api/travel"

export const getLocations = () => {
    const URL = API_URL;
    const response = axios.get(URL);
    return response;
}
export const getOneLocation = (id) => {
    const URL = `${API_URL}/${id}`;
    const response = axios.get(URL);
    return response;
}

export const editLocation = (id, updatedLocation) => {
    const URL = `${API_URL}/${id}`;
    const response = axios.put(URL,updatedLocation);
    return response;
}

export const  createLocation = (location) => {
    const URL = API_URL;
    const response = axios.post(URL, location);
    return response;
}

export const  deleteTravel = (id) => {
    const URL = `${API_URL}/${id}`;
    const response = axios.delete(URL);
    return response;
}