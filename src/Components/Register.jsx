import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            navigate("/");
            Swal.fire({
                      title: "Sign up Successfull",
                      icon: "success",
                      draggable: true,
                    });
          })
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className=" flex justify-center items-center min-h-[calc(100vh-78px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <label className="label flex items-center mt-2">
              <input type="checkbox" className="checkbox" />
              Accept terms and conditions
            </label>
            <button className="btn btn-neutral mt-2">Register</button>
            <p className="my-3">
              Already Have An Account ?{" "}
              <Link className="text-secondary underline" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
