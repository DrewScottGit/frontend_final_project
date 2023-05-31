import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <p>Travel Companion</p>
        <div className="userOptions">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/addTravel">Add Travel</Link>
            </li>
            <li>
              <Link to="/travels">My Travels</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;