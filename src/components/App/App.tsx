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

  // Apply style to button tags

  return (
    <div>
      <div>
        <button onClick={renderTextBox}>Add Bookmark</button>
        {showTextBox && <TextBox />}
      </div>
      <div>
        <button onClick={renderGetBookmark}>Get Bookmark</button>
        {showBookmark && <GetBookmark />}
      </div>
      <div>
        <button onClick={renderGetURL}>Get Bookmark from URL</button>
        {showGetURL && <GetURL currentTab={currentTab} />}
      </div>
    </div>
  );
};

export default App;
