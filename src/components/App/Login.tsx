// Create a Login Form and store the token in chrome storage

import * as React from "react";
import { useContext } from "react";
import axios from "axios";
import { StateContext } from "../context/StateContext";
import { _userAccountService } from "../../utils/services";

const Login = ({ getTokenFrom }) => {
  const [token, settoken] = React.useState("");
  const [error, setError] = React.useState("");

  const state = useContext(StateContext);
  console.log("state from context", state);

  const handleLogin = (e) => {
    e.preventDefault();
    if (token === "") {
      setError("Please fill all the fields");
    } else {
      setError("");

      _userAccountService
        .loginWithToken({ token })
        .then((res) => {
          console.log("TOKEN res.data login 26", {
            resData: res.data,
            token: res?.data?.token,
          });
          chrome.storage.sync.set({ token: res?.data?.token, user:res?.data?.user }, () => {
            getTokenFrom(res?.data?.token);
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
    <form
      onSubmit={handleLogin}
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "between",
        alignItems: "center",
        // height: "100vh",
        backgroundColor: "#f1f1f1",
        borderRadius: "30px",
      }}
    >
      <div className="login">
        <div className="login__container">
          <h1>Login Dee Second Brain</h1>
          <textarea
            placeholder="Token"
            value={token}
            required
            onChange={(e) => settoken(e.target.value)}
            style={{
              marginBottom: "5px",
              padding: "5px",
              borderRadius: "5px",
              width: "96%",
              height: "40px",
              // border color 6A46F9
              border: "1px solid #4456FF",
            }}
          />
          <br></br>
          <div className="error">{error}</div>
          <br></br>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "#4456FF",
                color: "white",
                padding: "10px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "12px",
                border: "none",
                // width: "87%",
              }}
            >
              <a
                style={{
                  backgroundColor: "#4456FF",
                  color: "white",
                  textDecoration: "none",
                }}
                href="https://ai.soobati.com/auth/sign-up"
                target="_blank"
              >
                SignUp
              </a>
            </button>
            <input
              style={{
                backgroundColor: "#4456FF",
                color: "white",
                padding: "10px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "12px",
                border: "none",
                // width: "87%",
              }}
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </div>
    </form>
    // register
  );
};

export default Login;
