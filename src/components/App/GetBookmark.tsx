import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

console.log(BACKEND_URL);

const GetBookmark = () => {
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
    axios.delete(`${BACKEND_URL}${id}`).then((res) => {
      console.log(res);
      setButtonClicked(!buttonClicked);
    });
  };

  useEffect(() => {
    getCurrent();
  }, []);

  const getBookmarkFromURL = () => {
    axios.get(BACKEND_URL + "url?url=" + currentTab).then((res) => {
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
        {bookmarks.map((bookmark) => (
          <div key={bookmark._id}>
            <h1>{bookmark.title}</h1>
            <p>{bookmark.description}</p>
            <p>{bookmark.url}</p>
            <p>{bookmark.tags}</p>
            <button onClick={() => deleteBookmark(bookmark._id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetBookmark;
