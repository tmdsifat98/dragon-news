import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
const SocialLogin = () => {
  const { googleLogin } = use(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      ?.then((res) => {
        Swal.fire({
          title: "Login successfull",
          icon: "success",
          draggable: true,
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-secondary btn-outline"
      >
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
