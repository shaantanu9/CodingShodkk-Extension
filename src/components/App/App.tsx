import React from "react";
// import App1 from "../../contentScripts"
import TextBox from "./InputBookmark";
import GetBookmark from "./GetBookmark";
import GetURL from "./GetURL";
const App = () => {
  const [showBookmark, setShowBookmark] = React.useState(false);
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

  // style
  const style = {
    container: {
      // fancy style
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      padding: "0 30px",
      height: "60vh",
    },
    button: {
      // button style
      radius: "5px",
      padding: "10px",
      margin: "10px",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  };
  // Apply style to button tags
  const buttonStyle = {
    borderRadius: style.button.radius,
    padding: style.button.padding,
    margin: style.button.margin,
    background: style.button.background,
  };

  return (
    <div style={style.container}>
      <div>
        <button style={buttonStyle} onClick={renderTextBox}>
          Add Bookmark
        </button>
        {showTextBox && <TextBox />}
      </div>
      <div>
        <button style={buttonStyle} onClick={renderGetBookmark}>
          Get Bookmark
        </button>
        {showBookmark && <GetBookmark />}
      </div>
      <div>
        <button style={buttonStyle} onClick={renderGetURL}>
          Get Bookmark from URL
        </button>
        {showGetURL && <GetURL currentTab={currentTab} />}
      </div>
    </div>
  );
};

export default App;
