import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import MarqueTag from "../Components/MarqueTag";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="w-11/12 mx-auto py-3 mt-5 bg-base-200 flex items-center">
        <button className="btn btn-secondary mx-3">Latest</button>
        <MarqueTag />
      </div>
      <div className="w-11/12 mx-auto mt-5">
      <Navbar />
      </div>
      <h1 className="mt-20 text-center">
        404 error
      </h1>
    </div>
  );
};

export default ErrorPage;
