import axios from "axios";
import React from "react";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = "https://camel-bedclothes.cyclic.app/";

const ShowBookmark = ({ bookmarks }) => {
  const [stateChange, setStateChange] = React.useState(false);

  const deleteBookmark = (id) => {
    console.log("deleteBookmark", id);
    axios.delete(`${BACKEND_URL}bookmarks/${id}`).then((res) => {
      console.log(res);
      setStateChange(!stateChange);
    });
  };

  // Create Copy button to copy Description
  const copyToClipboard = (e) => {
    if (e.target.value.startsWith("```") && e.target.value.endsWith("```")) {
      e.target.value = e.target.value.replace(/```/g, "");
    }
    navigator.clipboard.writeText(e.target.value);
  };

  //   Overall Style to show bookmark data
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    boxSizing: "border-box",
  };
  //   Style for each bookmark
  const bookmarkStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    boxSizing: "border-box",
  };

  return (
    <>
      <div id="mainBookmark">
        {bookmarks.map((bookmark) => (
          <div key={bookmark._id}>
            <h1>{bookmark.title}</h1>
            <p>{bookmark.description}</p>
            <p>{ShowAsCode(bookmark.code)}</p>
            <a href={bookmark.url}>{bookmark.url}</a>
            <p>
              {bookmark.tags.map((tag, i) => (
                <span key={i}>#{tag} </span>
                // {/* <span key={tag}>{tag}, </span> */}
              ))}
            </p>
            <button onClick={() => deleteBookmark(bookmark._id)}>delete</button>
            <button onClick={copyToClipboard} value={bookmark.description}>
              Copy Description
            </button>
            <button onClick={copyToClipboard} value={bookmark.code}>
              Copy Code
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowBookmark;

// if description start with ``` then it is code and we need to show it as code
// if description start with ``` then it is code and we need to show it as code
function ShowAsCode(code) {
  console.log(code, "code");
  code = code === "" || code == undefined ? "Code shown here" : code;
  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "12px",
  };
  return (
    <pre style={style}>
      <code>{code}</code>
    </pre>
  );
}
