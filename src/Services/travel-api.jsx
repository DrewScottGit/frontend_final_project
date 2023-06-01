import axios from "axios";
const API_URL = "https://THIS IS A RENDER WEBITE URL"

export const getLocations = () => {
    const URL = API_URL;
    const response = axios.get(URL);
    return response;
}
export const getLocation = () => {
    const URL = `${API_URL}/${id}`;
    const response = axios.get(URL);
    return response;
}

export const editLocation = () => {
    const URL = `${API_URL}/${id}`;
    const response = axios.put(URL,updatedLocation);
    return response;
}

export const  createLocation = () => {
    const URL = API_URL;
    const response = axios.post(URL, location);
    return response;
}

export const  deleteTravel = () => {
    const URL = `${API_URL}/${id}`;
    const response = axios.delete(URL);
    return response;
}