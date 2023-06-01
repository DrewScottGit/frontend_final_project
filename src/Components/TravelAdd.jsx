import React from "react";
import { useState } from "react";
import { createLocation } from "../Services/travel-api";
import { useNavigate } from "react-router-dom";

export default function TravelAdd() {
  const nav = useNavigate();
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput((prevState) => ({ ...prevState }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const travel = {
      city: String(e.target.city.value),
      country: String(e.target.country.value),
      description: String(e.target.description.value),
      image: String(e.target.image.value),
    };
    createLocation(travel).then(() => nav("/travels"));
  };

  return (
    <div>
      <h1>Add Travel</h1>
      <form onSubmit={handleSubmit}>
        <div className="formSyle">
          <h1>NOT SURE</h1>
          <input
            type="text"
            placeholder="City"
            name="NOT SURE"
            onChange={handleChange}
            value={input.name}
            className="inputStyle"
          ></input>
        </div>
      </form>
    </div>
  );
}
