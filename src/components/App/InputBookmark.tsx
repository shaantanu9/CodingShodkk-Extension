import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { fetchVideoDetails } from "../../utils/subtitle";
import { generateContent } from "../../utils/gemeniModel";
import { _bookmarkAccountService } from "../../utils/services";

const BACKEND_URL = "https://camel-bedclothes.cyclic.app";
const intialState = {
  title: "",
  url: "",
  description: "",
  tags: [],
  isPrivate: false,
  isError: false,
  code: "",
  summary: "",
};

const TextBox = ({ token }) => {
  const [tokenFromMain, setTokenFromMain] = useState(token);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);
  const [postedSuccess, setPostedSuccess] = useState(false);
  const [post, setPost] = useState(intialState);

  const isYoutubeURL = (url) => {
    if (
      url.includes("youtube.com") ||
      url.includes("youtu.be") ||
      url.includes("&")
    ) {
      return true;
    }
    return false;
  };

  const getCurrentTab = useCallback(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      const tabUrl = isYoutubeURL(tabs[0].url)
        ? tabs[0].url.split("&")[0]
        : tabs[0].url;
      setCurrentTab(tabUrl);
      setPageTitle(tabs[0].title);
      setPost((prevPost) => ({
        ...prevPost,
        url: tabUrl,
        title: tabs[0].title,
      }));
    });
  }, []);

  useEffect(() => {
    getCurrentTab();
  }, [getCurrentTab]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [id]:
        type === "checkbox"
          ? checked
          : id === "tags"
          ? value.split(",")
          : value,
    }));
  };


  // useEffect(() => {
  //   console.log("Inside useEffect from InputBookmark.tsx")
  //   console.log("Inside useEffect from InputBookmark.tsx")
  //   console.log("Inside useEffect from InputBookmark.tsx")
  //   console.log("Inside useEffect from InputBookmark.tsx")
  //   let { innerText, innerHTML } = document.body;
  //   let description:any = document.querySelector('meta[name="description"]');
  //   let keyword:any = document.querySelector('meta[name="keywords"]');
  //   let title:any = document.title;

  //   const handleMessage = async (message) => {
  //     if (message.action === "bookmarkSaved") {
  //       console.log("Bookmark saved successfully!", {
  //         innerText: document.body.innerText,
  //         data: message.data,
  //         url: message.data.url,
  //       });

  //       await _bookmarkAccountService.createBookmark({
  //         title,
  //         url: window.location.href,
  //         text: innerText,
  //         html: innerHTML,
  //         description: description?.content,
  //         tags: keyword?.content.split(",") || [],
  //       });

  //       // setData(message.data);
  //       // setNotification(true);
  //       // setTimeout(() => setNotification(false), 3000); // Hide after 3 seconds
  //     }
  //   };

  //   chrome.runtime.onMessage.addListener(handleMessage);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tags: any = post.tags;
    tags = tags.map((tag) => tag.trim().toLowerCase()).filter((tag) => tag);
    const uniqueTags = [...new Set(tags)];

    try {
      if (isYoutubeURL(currentTab)) {
        const youtubeId = currentTab.split("v=")[1];
        const videoDetails = await fetchVideoDetails(youtubeId);
        const subtitleText = videoDetails.subtitles
          .map((sub) => sub.text)
          .join(" ");
        const summaryContent = await generateContent(
          `this is youtube video subtitle, give detail pointwise summary of this and if ${videoDetails.title} content number means video explain certain ponints then mentions that all also this is subtitle ${subtitleText}, if `
        );

        const data = {
          ...post,
          description: videoDetails.description,
          title: videoDetails.title,
          tags: uniqueTags,
          summary: summaryContent,
        };

        if (data.description.length > 4) {
          setLoading(true);
          // const response = await axios.post(`${BACKEND_URL}/bookmarks`, data, {
          //   headers: {
          //     Authorization: `Bearer ${tokenFromMain}`,
          //   },
          // });

          const response = await _bookmarkAccountService.createBookmark(data);
          setPostedSuccess(true);
          setLoading(false);
          setTimeout(() => setPostedSuccess(false), 2000);
          setPost(intialState);
        }
      } else {
        const data = {
          ...post,
          tags: uniqueTags,
        };
        if (data.description.length > 4) {
          setLoading(true);
          const response = await _bookmarkAccountService.createBookmark(data);
          setPostedSuccess(true);
          setLoading(false);
          setTimeout(() => setPostedSuccess(false), 2000);
          setPost(intialState);
        }
      }
    } catch (error) {
      console.error("Error while posting bookmark:", error);
    }
  };

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
      marginBottom: "10px",
    },
    button: {
      width: "100%",
      height: "30px",
      marginTop: "10px",
    },
    label: {
      width: "100%",
      height: "30px",
      marginBottom: "5px",
    },
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        //  style={formStyle.container}
        className="flex flex-col justify-center items-center form"
      >
        <label style={formStyle.label} htmlFor="title">
          Title
        </label>
        <input
          style={formStyle.input}
          value={post.title}
          id="title"
          onChange={handleInputChange}
          type="text"
          autoCapitalize="on"
          autoCorrect="on"
          autoComplete="on"
          autoSave="on"
        />
        <label style={formStyle.label} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          onChange={handleInputChange}
          value={post.description}
          required
          style={formStyle.input}
          autoFocus
        />
        <label style={formStyle.label} htmlFor="code">
          Code
        </label>
        <textarea
          style={formStyle.input}
          id="code"
          onChange={handleInputChange}
          value={post.code}
        />
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
            onChange={handleInputChange}
            checked={post.isPrivate}
          />
          <label style={formStyle.label} htmlFor="isError">
            Is this Error
          </label>
          <input
            type="checkbox"
            id="isError"
            onChange={handleInputChange}
            checked={post.isError}
          />
        </div>
        <label style={formStyle.label} htmlFor="tags">
          Tags
        </label>
        <input
          style={formStyle.input}
          value={post.tags}
          id="tags"
          onChange={handleInputChange}
          autoComplete="on"
        />
        <input style={formStyle.button} type="submit" value="Bookmark" />
      </form>
      {loading && <h1>Posting Please wait</h1>}
      {postedSuccess && <h1>Bookmark Posted Successfully</h1>}
    </>
  );
};

export default TextBox;
