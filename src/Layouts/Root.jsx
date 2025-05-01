import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import MarqueTag from "../Components/MarqueTag";
import Navbar from "../Components/Navbar";
import LeftNav from "../Components/SideNav/LeftNav";
import RightNav from "../Components/SideNav/RightNav";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="w-11/12 mx-auto py-3 mt-5 bg-base-200 flex items-center">
        <button className="btn btn-secondary mx-3">Latest</button>
        <MarqueTag />
      </div>
      <nav className="w-11/12 mx-auto my-5">
        <Navbar />
      </nav>
      <div className="grid grid-cols-4 w-11/12 mx-auto gap-12 mt-4">
        <aside>
          <LeftNav />
        </aside>
        <div className="col-span-2">{state=="loading" ? "loading..." : <Outlet />}</div>
        <aside>
          <RightNav />
        </aside>
      </div>
    </div>
  );
};

export default Root;
