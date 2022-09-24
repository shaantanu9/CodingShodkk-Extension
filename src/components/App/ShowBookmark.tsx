import axios from "axios";
import React from "react";
const ShowBookmark = ({ bookmarks }) => {
  const deleteBookmark = (id) => {
    console.log("deleteBookmark", id);
    axios.delete(`http://localhost:3000/bookmarks/${id}`).then((res) => {
      console.log(res);
      // setButtonClicked(!buttonClicked);
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
            <p>{ShowAsCode(bookmark.description)}</p>
            <p>{bookmark.url}</p>
            <p>{bookmark.tags}</p>
            <button onClick={() => deleteBookmark(bookmark._id)}>delete</button>
            <button onClick={copyToClipboard} value={bookmark.description}>
              Copy
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
function ShowAsCode(description) {
  if (description.startsWith("```")) {
    description = description.replace("```", "");
    // give css class to show it as code
    const style = {
      backgroundColor: "black",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "12px",
    };
    return (
      <pre style={style}>
        <code>{description}</code>
      </pre>
    );
  } else {
    return <p>{description}</p>;
  }
}
