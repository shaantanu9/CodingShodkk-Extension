import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowBookmark from "./ShowBookmark";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = "https://camel-bedclothes.cyclic.app/";
// const BACKEND_URL = "http://localhost:8080/";

const GetURL = ({ currentTab, token }) => {
  const [tokenFromMain, setTokenFromMain] = useState(token);
  const [getUrl, setGetUrl] = useState("");
  const [getBookmarkData, setGetBookmarkData] = useState([]);
  const [zeroBookmark, setZeroBookmark] = useState(false);
  const onChangeHandler = (e) => {
    const { value, id } = e.target;
    setGetUrl(value);
  };

  const getPersonalBookmarkFromURL = () => {
    setGetBookmarkData([]);
    if (getUrl === "") setGetUrl(currentTab);
    console.log(getUrl, "GetURL from getBookmarkFromURL", currentTab);
    axios
      .get(`${BACKEND_URL}bookmarks/private/search?s=${getUrl}`, {
        headers: {
          Authorization: `Bearer ${tokenFromMain}`,
        },
      })
      .then((res) => {
        console.log(res.data, "then from getPersonalBookmarkFromURL");
        if (res.data.length === 0) {
          // alert("No Bookmark Found");
          return <div>No Bookmark Found</div>;
        }
        setGetBookmarkData(res.data);
      });
  };
  const getBookmarkFromURL = () => {
    setGetBookmarkData([]);
    if (getUrl === "") setGetUrl(currentTab);
    console.log(getUrl, "GetURL from getBookmarkFromURL", currentTab);
    axios
      .get(`${BACKEND_URL}bookmarks/search?s=${getUrl}`, {
        headers: {
          Authorization: `Bearer ${tokenFromMain}`,
        },
      })
      .then((res) => {
        console.log(res.data, "then from getBookmarkFromURL");
        if (res.data.length === 0) {
          // alert("No Bookmark Found");
          return <div>No Bookmark Found</div>;
        }
        setGetBookmarkData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      getBookmarkFromURL();
    }
  };

  const style = {
    buttondiv: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px",
    },
  } as const;

  return (
    <>
      <div>
        <input
          type="text"
          id="url"
          onChange={onChangeHandler}
          onKeyDown={(e) => onEnter(e)}
        />
        <br />
        <div style={style.buttondiv}>
          <button onClick={getPersonalBookmarkFromURL}>Get My Bookmark</button>
          <button onClick={getBookmarkFromURL}>Get Bookmark</button>
        </div>
        <p>searchTearm: {getUrl} </p>
      </div>
      <ShowBookmark bookmarks={getBookmarkData} />
      <br />
    </>
  );
};

export default GetURL;
