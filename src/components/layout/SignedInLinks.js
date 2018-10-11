import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/">New Scrape</NavLink>
      </li>
      <li>
        <NavLink to="/history">History</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          ME
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
