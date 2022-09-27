import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowBookmark from "./ShowBookmark";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = "https://camel-bedclothes.cyclic.app/";

// console.log(BACKEND_URL);

const GetBookmark = ({ token }) => {
  const [tokenFromMain, setTokenFromMain] = useState(token);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarksError, setBookmarksError] = useState(false);
  const [currentTab, setCurrentTab] = React.useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const controller = new AbortController();

  const getCurrent = () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      console.log(tabs[0].url, "tabs[0].url");
      setCurrentTab(() => tabs[0].url);
      getBookmarkFromURL(tabs[0].url);
    });
  };

  useEffect(() => {
    getCurrent();
  }, []);

  const getBookmarkFromURL = (currentTab) => {
    return axios
      .get(BACKEND_URL + "bookmarks/private/search?s=" + currentTab, {
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${tokenFromMain}`,
        },
      })
      .then((res) => {
        console.log(res.data, "then");
        console.log(res.data, "then from getBookmarkFromURL");
        setBookmarks(res.data);
        setBookmarksError(false);
      })
      .catch((err) => {
        console.log(err);
        setBookmarksError(true);
      });
  };

  return (
    <>
      <div>
        <ShowBookmark bookmarks={bookmarks} />
      </div>
    </>
  );
};

export default GetBookmark;
