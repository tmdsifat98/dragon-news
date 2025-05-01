import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import QZone from "../QZone";
import { Link } from "react-router";

const RightNav = () => {
  return (
    <div className="flex flex-col gap-3 px-3">
      <h1 className="text-xl font-semibold">Login with</h1>

      {/* Google */}
      <button className="btn btn-secondary btn-outline">
        <FcGoogle />
        Login with Google
      </button>
      {/* GitHub */}
      <button className="btn btn-primary btn-outline">
        <FaGithub />
        Login with GitHub
      </button>
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
      <QZone />
    </div>
  );
};

export default RightNav;
