import React from "react";
import { createLocation } from "../../Services/travel-api";
import { useNavigate } from "react-router-dom";

export default function TravelAdd() {
  const nav = useNavigate();

  const createNewTravel = (e) => {
    const travel = {
      city: e.target.city.value,
      country: e.target.country.value,
      description: e.target.description.value,
      image: e.target.image.value,
    }
    createLocation(travel).then(() => nav('/'))
  }


  return (
    <div>
      <h1>Add Travel</h1>
      <form onSubmit={createNewTravel}>
        <div className="formSyle">
           City:<input type="text" name="city" />
           Country:<input type="text" name="country" />
           Description:<input type="text" name="description" />
          <input type="submit"/>
        </div>
      </form>
    </div>
  );
}
