import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const submitForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-form">
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>
            <h2 className="form-title">Login Form</h2>
          </legend>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleInputEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handleInputPassword}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <input type="submit" value="Login" className="login-btn" />
        </fieldset>
      </form>
      <p>
        New to ema-john{" "}
        <Link to={"/register"} className="create-account">
          Create new account
        </Link>
      </p>
      <fieldset>
        <legend>or</legend>
      </fieldset>
      <p style={{ color: "red" }}>{error ? error.message : ""}</p>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Login;
