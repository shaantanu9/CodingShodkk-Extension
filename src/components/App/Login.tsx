// // // Create a Login Form and store the token in chrome storage

// // import * as React from "react";
// // import { useContext } from "react";
// // import axios from "axios";
// // import { StateContext } from "../context/StateContext";
// // import { _userAccountService } from "../../utils/services";

// // const Login = ({ getTokenFrom }) => {
// //   const [token, settoken] = React.useState("");
// //   const [error, setError] = React.useState("");

// //   const state = useContext(StateContext);
// //   console.log("state from context", state);

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     if (token === "") {
// //       setError("Please fill all the fields");
// //     } else {
// //       setError("");

// //       _userAccountService
// //         .loginWithToken({ token })
// //         .then((res) => {
// //           console.log("TOKEN res.data login 26", {
// //             resData: res.data,
// //             token: res?.data?.token,
// //           });
// //           chrome.storage.sync.set({ token: res?.data?.token, user:res?.data?.user }, () => {
// //             getTokenFrom(res?.data?.token);
// //             console.log("saved");
// //           });
// //         })
// //         .catch((err) => {
// //           setError("Invalid Credentials");
// //           console.log(err);
// //         });
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={handleLogin}
// //       style={{
// //         display: "flex",
// //         width: "100%",
// //         justifyContent: "between",
// //         alignItems: "center",
// //         // height: "100vh",
// //         backgroundColor: "#f1f1f1",
// //         borderRadius: "30px",
// //       }}
// //     >
// //       <div className="login">
// //         <div className="login__container">
// //           <h1>Login Dee Second Brain</h1>
// //           <textarea
// //             placeholder="Token"
// //             value={token}
// //             required
// //             onChange={(e) => settoken(e.target.value)}
// //             style={{
// //               marginBottom: "5px",
// //               padding: "5px",
// //               borderRadius: "5px",
// //               width: "96%",
// //               height: "40px",
// //               // border color 6A46F9
// //               border: "1px solid #4456FF",
// //             }}
// //           />
// //           <br></br>
// //           <div className="error">{error}</div>
// //           <br></br>

// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "space-between",
// //               alignItems: "center",
// //             }}
// //           >
// //             <button
// //               style={{
// //                 backgroundColor: "#4456FF",
// //                 color: "white",
// //                 padding: "10px",
// //                 textAlign: "center",
// //                 textDecoration: "none",
// //                 display: "inline-block",
// //                 fontSize: "16px",
// //                 margin: "4px 2px",
// //                 cursor: "pointer",
// //                 borderRadius: "12px",
// //                 border: "none",
// //                 // width: "87%",
// //               }}
// //             >
// //               <a
// //                 style={{
// //                   backgroundColor: "#4456FF",
// //                   color: "white",
// //                   textDecoration: "none",
// //                 }}
// //                 href="https://ai.soobati.com/auth/sign-up"
// //                 target="_blank"
// //               >
// //                 SignUp
// //               </a>
// //             </button>
// //             <input
// //               style={{
// //                 backgroundColor: "#4456FF",
// //                 color: "white",
// //                 padding: "10px",
// //                 textAlign: "center",
// //                 textDecoration: "none",
// //                 display: "inline-block",
// //                 fontSize: "16px",
// //                 margin: "4px 2px",
// //                 cursor: "pointer",
// //                 borderRadius: "12px",
// //                 border: "none",
// //                 // width: "87%",
// //               }}
// //               type="submit"
// //               value="Login"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //     // register
// //   );
// // };

// // export default Login;

// import React, { useState, useContext } from "react";
// import { _userAccountService } from "../../utils/services";
// import { StateContext } from "../context/StateContext";

// const Login = ({ getTokenFrom }) => {
//   const [token, setToken] = useState("");
//   const [error, setError] = useState("");

//   const state = useContext(StateContext);
//   console.log("state from context", state);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (token === "") {
//       setError("Please fill all the fields");
//     } else {
//       setError("");
//       _userAccountService
//         .loginWithToken({ token })
//         .then((res) => {
//           console.log("TOKEN res.data login 26", {
//             resData: res.data,
//             token: res?.data?.token,
//           });
//           chrome.storage.sync.set(
//             { token: res?.data?.token, user: res?.data?.user },
//             () => {
//               getTokenFrom(res?.data?.token);
//               console.log("saved");
//             }
//           );
//         })
//         .catch((err) => {
//           setError("Invalid Credentials");
//           console.log(err);
//         });
//     }
//   };

//   const primaryColor = "#4456FF";

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "100vh",
//         backgroundColor: "#f1f1f1",
//       }}
//     >
//       <form
//         onSubmit={handleLogin}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           width: "300px",
//           padding: "20px",
//           borderRadius: "15px",
//           backgroundColor: "white",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h1 style={{ color: primaryColor, marginBottom: "20px" }}>Login Dee Second Brain</h1>
//         <textarea
//           placeholder="Token"
//           value={token}
//           required
//           onChange={(e) => setToken(e.target.value)}
//           style={{
//             marginBottom: "10px",
//             padding: "10px",
//             borderRadius: "5px",
//             width: "100%",
//             height: "40px",
//             border: `1px solid ${primaryColor}`,
//             fontSize: "16px",
//           }}
//         />
//         {error && (
//           <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
//         )}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//           }}
//         >
//           <button
//             style={{
//               backgroundColor: primaryColor,
//               color: "white",
//               padding: "10px 20px",
//               textAlign: "center",
//               textDecoration: "none",
//               display: "inline-block",
//               fontSize: "16px",
//               margin: "4px 2px",
//               cursor: "pointer",
//               borderRadius: "12px",
//               border: "none",
//               flexGrow: 1,
//               marginRight: "5px",
//             }}
//           >
//             <a
//               style={{
//                 color: "white",
//                 textDecoration: "none",
//               }}
//               href="https://ai.soobati.com/auth/sign-up"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Sign Up
//             </a>
//           </button>
//           <input
//             style={{
//               backgroundColor: primaryColor,
//               color: "white",
//               padding: "10px 20px",
//               textAlign: "center",
//               textDecoration: "none",
//               display: "inline-block",
//               fontSize: "16px",
//               margin: "4px 2px",
//               cursor: "pointer",
//               borderRadius: "12px",
//               border: "none",
//               flexGrow: 1,
//               marginLeft: "5px",
//             }}
//             type="submit"
//             value="Login"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

// Final
import React, { useState, useContext } from "react";
import { _userAccountService } from "../../utils/services";
import { StateContext } from "../context/StateContext";

const Login = ({ getTokenFrom }) => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const state = useContext(StateContext);
  const [hover, setHover] = useState(false);
  const [hoverS, setHoverS] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (token === "") {
      setError("Please fill all the fields");
    } else {
      setError("");
      setLoading(true);
      _userAccountService
        .loginWithToken({ token })
        .then((res) => {
          chrome.storage.sync.set(
            { token: res?.data?.token, user: res?.data?.user },
            () => {
              getTokenFrom(res?.data?.token);
              setLoading(false);
            }
          );
        })
        .catch((err) => {
          setError("Invalid Credentials");
          setLoading(false);
        });
    }
  };

  const primaryColor = "#4456FF";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
        // height: "100vh",
        backgroundColor: "#f1f1f1",
        // padding: "20px",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          padding: "20px",
          borderRadius: "15px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="/SoobatiAILogo.png"
          alt="Logo"
          style={{ width: "100px" }}
        />
        <h1 style={{ color: primaryColor, marginBottom: "-10px" }}>
          Login to Soobati AI
        </h1>
        <p style={{ textAlign: "center", color: "#333", marginBottom: "20px", textDecoration:"bold", 
        fontSize: "14px", fontWeight: "bold"
       }}>
          <strong>Your AI Companion for Life</strong>
        </p>
        <p style={{ marginBottom: "20px", textAlign: "center", color: "#333" }}>
          Paste your token to login. If you don't have a token, please sign up.
        </p>
        <textarea
          placeholder="Token"
          value={token}
          required
          onChange={(e) => setToken(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            width: "100%",
            height: "40px",
            border: `1px solid ${primaryColor}`,
            fontSize: "16px",
            minHeight: "80px",
          }}
        />
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
        {loading && (
          <div style={{ marginBottom: "10px", color: primaryColor }}>
            Loading...
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            style={{
              backgroundColor: hover ? "#3548d4" : primaryColor,
              color: "white",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "12px",
              border: "none",
              flexGrow: 1,
              marginRight: "5px",
            }}
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
          >
            <a
              style={{
                color: "white",
                textDecoration: "none",
              }}
              href="https://ai.soobati.com/auth/sign-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
          </button>
          <input
            style={{
              backgroundColor: hoverS ? "#3548d4" : primaryColor,
              color: "white",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "12px",
              border: "none",
              flexGrow: 1,
              marginLeft: "5px",
            }}
            onMouseOver={() => setHoverS(true)}
            onMouseLeave={() => setHoverS(false)}
            type="submit"
            value="Login"
          />
        </div>
        <p style={{ marginTop: "20px", color: "#777", textAlign: "center" }}>
          By logging in, you agree to our{" "}
          <a
            href="https://ai.soobati.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: primaryColor }}
          >
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
