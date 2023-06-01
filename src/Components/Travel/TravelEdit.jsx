import { getLocation, editLocation } from "../../Services/travel-api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TravelEdit() {
  const nav = useNavigate();
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getLocation(id).then((res) => setData(res.data));
  }, []);

  const editTheCity = (e) => {
    e.preventDefault();
    const updatedLocation = {
      city: e.target.city.value,
    };
    editLocation(id, updatedLocation);
    nav(`/${id}`);
  };

  const editTheCountry = (e) => {
    e.preventDefault();
    const updatedLocation = {
      city: e.target.country.value,
    };
    editLocation(id, updatedLocation);
    nav(`/${id}`);
  };

  const editTheDescription = (e) => {
    e.preventDefault();
    const updatedLocation = {
      city: e.target.description.value,
    };
    editLocation(id, updatedLocation);
    nav(`/${id}`);
  };

  if (data.city) {
    return (
      <div>
        <form onSubmit={editTheCity}>
          City:
          <input type="text" name="city" defaultValue={data.city} />
          <input type="submit" />
          <button
            onClick={() => {
              nav("/");
            }}
          >
            Home
          </button>
        </form>
      </div>
    );
  } else if (data.country) {
    return (
      <div>
        <form onSubmit={editTheCountry}>
          Country:
          <input type="text" name="country" defaultValue={data.country} />
          <input type="submit" />
          <button
            onClick={() => {
              nav("/");
            }}
          >
            Home
          </button>
        </form>
      </div>
    );
  } else if (data.description) {
    return (
      <div>
        <form onSubmit={editTheDescription}>
          Description:
          <input
            type="text"
            name="description"
            defaultValue={data.description}
          />
          <input type="submit" />
          <button
            onClick={() => {
              nav("/");
            }}
          >
            Home
          </button>
        </form>
      </div>
    );
  }
}
