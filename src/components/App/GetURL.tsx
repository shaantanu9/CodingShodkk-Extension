import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowBookmark from "./ShowBookmark";
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
    axios
      .get(`http://localhost:3000/bookmarks/url?url=${getUrl}`)
      .then((res) => {
        console.log(res.data);
        setGetBookmarkData(res.data);
      });
  };

  useEffect(() => {
    getBookmarkFromURL();
  }, [getUrl]);

  return (
    <>
      <div>
        <input type="text" id="url" value={getUrl} onChange={onChangeHandler} />
        <button onClick={getBookmarkFromURL}>Get Bookmark</button>
        <p>{getUrl}</p>
        {/* <button onClick={currentTabClickHandler}>CurrentTab</button> */}
        {/* get current tab */}
      </div>
      <ShowBookmark bookmarks={getBookmarkData} />
      {/* <div>
        {getBookmarkData.map((data) => (
          <div key={data.id}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.tags}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default GetURL;
