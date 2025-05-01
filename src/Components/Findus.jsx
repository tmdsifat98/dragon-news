import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Findus = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2>Find Us on</h2>
      <div className="join join-vertical">
        <button className="btn btn-outline join-item">
          <FaFacebook /> Facebook
        </button>
        <button className="btn btn-outline join-item">
          <FaTwitter /> Twitter
        </button>
        <button className="btn btn-outline join-item">
          <FaInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default Findus;
