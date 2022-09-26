import React from "react";
// import App1 from "../../contentScripts"
import TextBox from "./InputBookmark";
import GetBookmark from "./GetBookmark";
import GetURL from "./GetURL";
import Login from "./Login";
import Logout from "./Logout";
const App = () => {
  const [showBookmark, setShowBookmark] = React.useState(false);
  const [tokenFromLogin, getTokenFromLogin] = React.useState(null);
  const renderGetBookmark = () => {
    console.log("renderGetBookmark", showBookmark);
    setShowBookmark(!showBookmark);
    setShowGetURL(false);
    setShowTextBox(false);
  };
  const [showTextBox, setShowTextBox] = React.useState(false);
  const renderTextBox = () => {
    console.log("renderTextBox", showTextBox);
    setShowTextBox(!showTextBox);
    setShowGetURL(false);
    setShowBookmark(false);
  };
  const [showGetURL, setShowGetURL] = React.useState(false);
  const renderGetURL = () => {
    console.log("renderGetURL", showGetURL);
    setShowGetURL(!showGetURL);
    setShowTextBox(false);
    setShowBookmark(false);
  };
  const [currentTab, setCurrentTab] = React.useState(null);

  const getCurrent = () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      console.log(tabs[0].url);
      setCurrentTab(tabs[0].url);
    });
  };
  React.useEffect(() => {
    getCurrent();
  }, []);

  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    chrome.storage.sync.get(["token"], function (result) {
      console.log("Value currently is " + result.token);
      setToken(result.token);
    });
  }, []);

  // style

  // Apply style to button tags

  return token || tokenFromLogin ? (
    <div>
      <p>
        <b>Hi Shodkk Start Learning in Public</b>
      </p>
      <div>
        <p></p>
        <button onClick={renderTextBox}>Add Bookmark</button>
        {showTextBox && <TextBox token={token} />}
      </div>
      <div>
        <p></p>
        <button onClick={renderGetBookmark}>Get Bookmark</button>

        {showBookmark && <GetBookmark token={token} />}
      </div>
      <div>
        <p></p>
        <button onClick={renderGetURL}>Get Bookmark from URL</button>
        <p></p>

        {showGetURL && <GetURL currentTab={currentTab} token={token} />}
        <p></p>
      </div>
      {/* Add logout to right end style */}
      <div
        style={{
          position: "absolute", // or fixed
          right: "0", // or left: "0"
          bottom: "0", // or bottom: "0"
          padding: "10px", // or margin: "10px"
        }}
      >
        <Logout deleteToken={getTokenFromLogin} />
      </div>
    </div>
  ) : (
    <Login getTokenFrom={getTokenFromLogin} />
  );
};

export default App;
