import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()?.then(() => {
      alert("Signed out");
    });
  };
  console.log(import.meta.env.VITE_authDomain);
  return (
    <div className="flex justify-between">
      <div></div>
      <ul className="flex text-xl font-semibold ml-56 text-base-300 gap-4 items-center">
        <NavLink to="/categories/0">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </ul>
      <div className="flex gap-2 items-center">
        <h1>{user?.displayName}</h1>
        {user?.photoURL?<img className="h-9 w-9 mx-2 rounded-full" src={user.photoURL} />:<img src={userImg} alt="" />}
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
