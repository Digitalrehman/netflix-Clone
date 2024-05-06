import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase/firebase";
import Loader from "../../components/Loader/Loader";
const Login = () => {
  let [loader, setLoader] = useState(false);
  let [signIn, setSignIn] = useState("Sign In");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const user_auth = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (signIn === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoader(false);
  };

  return (
    <>
      {loader === true ? (
          <Loader />
        ) : (
      <div className="background">
        <img src={logo} />
      
          <div className="form">
            <h1>{signIn === "Sign Up" ? "Sign Up" : "Sign In"}</h1>
            <form>
              {signIn === "Sign Up" ? (
                <input
                  type="text"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              ) : (
                <></>
              )}

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="checkbox">
                <input type="checkbox" id="abc" />

                <label htmlFor="abc">Remember Me</label>
              </div>
              <button type="submit" onClick={user_auth}>
                {signIn}
              </button>
            </form>
            {signIn === "Sign Up" ? (
              <p>
                you have already account
                <span
                  onClick={() => {
                    setSignIn("Sign In");
                  }}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                you don't have an account
                <span
                  onClick={() => {
                    setSignIn("Sign Up");
                  }}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
      </div>
        )}
    </>
  );
};

export default Login;
