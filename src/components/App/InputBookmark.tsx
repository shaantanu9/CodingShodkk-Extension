import React from "react";
import { useState } from "react";
import axios from "axios";

const TextBox = () => {
  const [text, setText] = useState("");
  const [currentTab, setCurrentTab] = React.useState(null);
  const [pageTitle, setPageTitle] = React.useState(null);
  const filterYoutubeURL = (url) => {
    if (url.includes("youtube.com")) {
      const youtubeURL = url.split("&");
      return youtubeURL[0];
    } else {
      return url;
    }
  };

  const getCurrent = () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      setCurrentTab(filterYoutubeURL(tabs[0].url));
      setPageTitle(tabs[0].title);
      console.log("title", tabs[0].title);
    });
  };

  React.useEffect(() => {
    getCurrent();
  }, []);

  const [post, setPost] = useState({
    title: pageTitle,
    url: currentTab,
    description: "",
    tags: [],
  });
  const [getBookmarkData, setGetBookmarkData] = useState([]);

  const onChangeHandler = (e) => {
    const { value, id } = e.target;
    if (id === "tags") {
      console.log(value);
      setPost({ ...post, [id]: value.split(",") });
    }
    console.log("url", currentTab);
    setPost({ ...post, [id]: value });
  };

  // button to ask user description is code or text
  const [isCode, setIsCode] = useState(false);
  const [isText, setIsText] = useState(true);
  const isCodeHandler = () => {
    setIsCode(!isCode);
    setIsText(!isText);
  };

  // Post Data
  const bookMark = (e) => {
    e.preventDefault();
    const url = currentTab;
    const title = post.title;
    const description = post.description;
    const tags = post.tags[0].split(",");
    const data = {
      title,
      url: currentTab,
      description,
      tags,
    };
    const stringifyData = JSON.stringify(data);
    console.log(stringifyData, "stringifyData");
    description.length > 4 &&
      axios.post("http://localhost:3000/bookmarks", data).then((res) => {
        console.log(res);
      });
  };

  const getBookmarkFromURL = () => {
    axios
      .get(`http://localhost:3000/bookmarks/url?url=${currentTab}`)
      .then((res) => {
        console.log(res.data);
        setGetBookmarkData(getBookmarkData.concat(res.data));
        // concat vs push => concat return new array and push return length of array, concat is immutable, push is mutable and concat is better than push because it is immutable
      });
  };
  // add style to form in typescript
  const formStyle = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      width: "100%",
    },
    input: {
      width: "80%",
      height: "20%",
    },
    button: {
      width: "100%",
      height: "30px",
    },
    label: {
      width: "100%",
      height: "30px",
      marginBottom: "1px",
    },
  } as const;

  return (
    <>
      <form onSubmit={bookMark} style={formStyle.container}>
        {/* <label style={formStyle.label} htmlFor="url">URL</label> */}
        {/* <input style={formStyle.input} id="url" type="text" value={currentTab} /> */}
        <br />
        <label style={formStyle.label} htmlFor="title">
          Title
        </label>
        <input
          style={formStyle.input}
          value={post.title}
          id="title"
          onChange={(e) => onChangeHandler(e)}
          type="text"
          autoCapitalize="on"
          autoCorrect="on"
          autoComplete="on"
          autoSave="on"
        />
        <br />
        <label style={formStyle.label} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          onChange={(e) => onChangeHandler(e)}
          value={post.description}
          required
        ></textarea>
        {/* radio button to check is code */}
        <div>
          <input
            style={formStyle.input}
            type="checkbox"
            id="isCode"
            name="isCode"
            value="isCode"
            onClick={isCodeHandler}
          />
          <label style={formStyle.label} htmlFor="isCode">
            Is Code
          </label>
        </div>
        <br />
        <label style={formStyle.label} htmlFor="tags">
          Tags
        </label>
        <input
          style={formStyle.input}
          value={post.tags}
          id="tags"
          onChange={(e) => onChangeHandler(e)}
          autoComplete="on"
        />
        <br />
        {/* Get Code Snippet as Input */}
        <label style={formStyle.label} htmlFor="code">
          Code
        </label>
        <input style={formStyle.input} type="text" />
        <br />
        <input style={formStyle.input} type="submit" value="BookMark" />
      </form>
      <p>{currentTab}</p>
      {/* <button onClick={getBookmarkFromURL}>Get Bookmark</button> */}
    </>
  );
};

export default TextBox;
