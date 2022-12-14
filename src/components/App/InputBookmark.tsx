import React from "react";
import { useState } from "react";
import axios from "axios";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const BACKEND_URL = "http://localhost:8080";
const BACKEND_URL = "https://camel-bedclothes.cyclic.app";
// const BACKEND_URL: string = process.env.REACT_APP_BACKEND_URL as string;

const TextBox = ({ token }) => {
  console.log(token, "token from TextBox");
  const [tokenFromMain, setTokenFromMain] = useState(token);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [currentTab, setCurrentTab] = React.useState(null);
  const [pageTitle, setPageTitle] = React.useState(null);
  const [postedSuccess, setPostedSuccess] = useState(false);
  const filterYoutubeURL = (url) => {
    if (
      url.includes("youtube.com") ||
      url.includes("youtu.be") ||
      url.includes("&")
    ) {
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

  const initialPost = {
    title: pageTitle,
    url: currentTab,
    description: "",
    tags: "",
    isPrivate: false,
    isError: false,
    code: "",
  };

  const [post, setPost] = useState(initialPost);
  const [getBookmarkData, setGetBookmarkData] = useState([]);

  const onChangeHandler = (e) => {
    // for checkbox
    console.log(
      e.target.type,
      "e.target.type",
      e.target.id,
      `e.target.id`,
      e.target.checked,
      `e.target.checked`,
      token,
      tokenFromMain
    );
    if (e.target.type === "checkbox") {
      setPost({ ...post, [e.target.id]: e.target.checked });
      return;
    }
    console.log(token, "token from onChangeHandler");
    const { value, id } = e.target;
    if (id === "tags") {
      console.log(value);
      setPost({ ...post, [id]: value.split(",") });
    }
    console.log(post, "post", tokenFromMain, "tokenFromMain");
    setPost({ ...post, [id]: value });
  };

  // Post Data
  const bookMark = (e) => {
    e.preventDefault();
    const title = post.title;
    const description = post.description;
    console.log(post.tags, "Post tags Before");
    let tags = post.tags.split(",");
    tags = tags.map((tag) => tag.trim());
    tags = tags.filter((tag) => tag !== "");
    tags = tags.map((tag) => tag.toLowerCase());
    tags = [...new Set(tags)];

    console.log(tags, "tags After");

    const data = {
      title,
      url: currentTab,
      description,
      tags,
      code: post.code,
      isPrivate: post.isPrivate,
      isError: post.isError,
    };
    const stringifyData = JSON.stringify(data);
    console.log(stringifyData, "stringifyData");
    if (description.length > 4) {
      setLoading(true);
      axios
        .post(BACKEND_URL + "/bookmarks", data, {
          headers: {
            Authorization: `Bearer ${tokenFromMain}`,
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data, "res.data");
          setPostedSuccess(true);
          setLoading(false);
          setTimeout(() => {
            setPostedSuccess(false);
          }, 2000);
          setPost(initialPost);
        })
        .catch((err) => {
          console.log("This is Error Message= ", err);
        });
    }
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
          // required
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
          style={formStyle.input}
          autoFocus
        ></textarea>
        <br />
        {/* Get Code Snippet as Input */}
        <label style={formStyle.label} htmlFor="code">
          Code
        </label>
        <textarea
          style={formStyle.input}
          id="code"
          onChange={(e) => onChangeHandler(e)}
          value={post.code}
        />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label style={formStyle.label} htmlFor="isPrivate">
            Is Private
          </label>
          <input
            type="checkbox"
            id="isPrivate"
            name="isPrivate"
            value="isPrivate"
            onChange={(e) => onChangeHandler(e)}
          />
          <label style={formStyle.label} htmlFor="isPrivate">
            Is this Error
          </label>
          <input
            type="checkbox"
            id="isError"
            name="isError"
            value="isError"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
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
        <input style={formStyle.input} type="submit" value="BookMark" />
      </form>
      <br />
      {/* If data Posted */}
      {loading && (
        <div>
          <h1>Posting Please wait</h1>
        </div>
      )}
      {postedSuccess && (
        <div>
          <h1>Bookmark Posted Successfully</h1>
        </div>
      )}

      <p>{currentTab}</p>
      {/* <button onClick={getBookmarkFromURL}>Get Bookmark</button> */}
    </>
  );
};

export default TextBox;
