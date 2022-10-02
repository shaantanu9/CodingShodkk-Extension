// Create a Login Form and store the token in chrome storage

import * as React from "react";
import { useContext } from "react";
import axios from "axios";
import { StateContext } from "../context/StateContext";
const BACKEND_URL = "https://camel-bedclothes.cyclic.app";
// const BACKEND_URL = "http://localhost:8080";

const Login = ({ getTokenFrom }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [keepMeLogin, setKeepMeLogin] = React.useState(false);
  const [error, setError] = React.useState("");

  const state = useContext(StateContext);
  console.log("state from context", state);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill all the fields");
    } else {
      setError("");
      return axios
        .post(BACKEND_URL + "/users/login", {
          email,
          password,
          keepMeLogin,
        })
        .then((res) => {
          console.log("TOKEN res.data", res.data);
          chrome.storage.sync.set({ token: res.data.token }, () => {
            getTokenFrom(res.data.token);
            console.log("saved");
          });
        })
        .catch((err) => {
          setError("Invalid Credentials");
          console.log(err);
        });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login">
        <div className="login__container">
          <h1>Login Shodkk</h1>
          <input
            type="text"
            placeholder="Email"
            value={email}
            required
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <div className="error">{error}</div>
          <br></br>
          <div>
            <input
              type="checkbox"
              name="keepMeLogin"
              id="keepMeLogin"
              onChange={(e) => setKeepMeLogin(e.target.checked)}
            />
            <label htmlFor="keepMeLogin">Keep me login</label>
          </div>
          <div>
            <p>
              <a href="https://google.com" target="_blank">
                Forgot Password?
              </a>
            </p>
            <p>
              <a href="https://google.com" target="_blank">
                Create an Account
              </a>
            </p>
          </div>

          <input type="submit" value="Login" />
          {/* <button onClick={handleLogin}>Login</button> */}
        </div>
      </div>
    </form>
    // register
  );
};

export default Login;
