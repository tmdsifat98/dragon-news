import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      alert("Signed out");
    });
  };
  return (
    <div className="flex justify-between">
      <div></div>
      <ul className="flex text-xl font-semibold text-base-300 gap-4 items-center">
        <NavLink to="/categories/0">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </ul>
      <div className="flex gap-2 items-center">
        <h1>{user?.displayName}</h1>
        {user?<img className="h-12 w-12" src={user.photoURL} />:<img src={userImg} alt="" />}
        {user ? (
          <button
            className="btn btn-primary px-9 rounded-none"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-9 rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
