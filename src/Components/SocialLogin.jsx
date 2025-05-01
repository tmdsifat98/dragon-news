import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-2">
      <button className="btn btn-secondary btn-outline">
        <FcGoogle />
        Login with Google
      </button>
      <button className="btn btn-primary btn-outline">
        <FaGithub />
        Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
