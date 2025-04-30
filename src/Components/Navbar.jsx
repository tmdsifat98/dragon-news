import React from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div></div>
      <ul className="flex gap-4 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </ul>
      <div className="flex gap-2 items-center">
        <img src={user} alt="" />
        <button className="btn btn-primary px-9 rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
