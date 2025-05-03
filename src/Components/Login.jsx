import React, { use } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Login Successfull",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        if (err.message == "Firebase: Error (auth/user-disabled).") {
          alert("Your account is suspended");
        } else if (
          err.message == "Firebase: Error (auth/invalid-credential)."
        ) {
          alert("Invalid userName or Password");
        }
      });
  };
  return (
    <div className=" flex justify-center items-center h-[calc(100vh-78px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="my-3">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary underline" to="/auth/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
