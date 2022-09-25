import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowBookmark from "./ShowBookmark";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = "https://camel-bedclothes.cyclic.app/";

const GetURL = ({ currentTab }) => {
  const [getUrl, setGetUrl] = useState("");
  const [getBookmarkData, setGetBookmarkData] = useState([]);
  const onChangeHandler = (e) => {
    const { value, id } = e.target;
    setGetUrl(value);
  };

  const getBookmarkFromURL = () => {
    if (getUrl === "") setGetUrl(currentTab);
    console.log(getUrl, "GetURL from getBookmarkFromURL", currentTab);
    axios.get(`${BACKEND_URL}bookmarks/search?s=${getUrl}`).then((res) => {
      console.log(res.data);
      setGetBookmarkData(res.data);
    });
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      getBookmarkFromURL();
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          id="url"
          onChange={onChangeHandler}
          onKeyDown={(e) => onEnter(e)}
        />
        <button onClick={getBookmarkFromURL}>Get Bookmark</button>
        <p>{getUrl}</p>
      </div>
      <ShowBookmark bookmarks={getBookmarkData} />
    </>
  );
};

export default GetURL;
