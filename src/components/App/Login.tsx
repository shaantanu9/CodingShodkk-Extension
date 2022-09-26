// Create a Login Form and store the token in chrome storage

import * as React from "react";
import axios from "axios";

const Login = ({ getTokenFrom }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill all the fields");
    } else {
      setError("");
      return axios
        .post("https://camel-bedclothes.cyclic.app/users/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          chrome.storage.sync.set({ token: res.data.token }, () => {
            getTokenFrom(res.data.token);
            console.log("saved");
          });
        })
        .catch((err) => {
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
