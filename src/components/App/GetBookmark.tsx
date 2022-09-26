import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowBookmark from "./ShowBookmark";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = "https://camel-bedclothes.cyclic.app/";

// console.log(BACKEND_URL);

const GetBookmark = ({ token }) => {
  const [tokenFromMain, setTokenFromMain] = useState(token);
  const [bookmarks, setBookmarks] = useState([]);
  const [currentTab, setCurrentTab] = React.useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const getCurrent = () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      console.log(tabs[0].url);
      setCurrentTab(tabs[0].url);
    });
  };

  const deleteBookmark = (id) => {
    axios.delete(`${BACKEND_URL}bookmarks/${id}`).then((res) => {
      console.log(res);
      setButtonClicked(!buttonClicked);
      getBookmarkFromURL();
    });
  };

  useEffect(() => {
    getCurrent();
  }, []);

  const getBookmarkFromURL = () => {
    axios.get(BACKEND_URL + "bookmarks/search?s=" + currentTab).then((res) => {
      console.log(res.data);
      setBookmarks(res.data);
    });
  };

  useEffect(() => {
    getBookmarkFromURL();
    console.log("object from GetBookmark");
  }, [buttonClicked]);

  if (bookmarks.length === 0) {
    getBookmarkFromURL();
    return <div>No Bookmark Found</div>;
  }

  return (
    <>
      <div>
        <ShowBookmark bookmarks={bookmarks} />
      </div>
    </>
  );
};

export default GetBookmark;
