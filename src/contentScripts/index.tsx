"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { _bookmarkAccountService } from "../utils/services";
import axios from "axios";
import pako from "pako";
import { fetchSubtitles, fetchVideoDetails } from "../utils/subtitle";
import { getYTSubtitleFromPage } from "../utils/getYTSubtitleFromPage";
import { generateContent } from "../utils/gemeniModel";
import { compressString, decompressString } from "../utils/compressfunc";
import YoutubeButtons from "../components/App/YoutubeButtons";
import { createRoot } from "react-dom/client";
import { LOGO_BASE64 } from "../utils/constant";

const App = () => {
  const [data, setData] = useState(null);
  const [notification, setNotification] = useState(false);
  const [url, setUrl] = useState("");

  const isYoutube = (url) => {
    return (
      url.startsWith("https://www.youtube.com/") ||
      url.startsWith("https://youtube.com/") ||
      url.startsWith("https://m.youtube.com/")
    );
  };

  const isLinkedIn = (url) => {
    return url.startsWith("https://www.linkedin.com/");
  };

  const getYTVideoDetailFromHTML = () => {
    var xpath =
      "/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[1]/player-microformat-renderer/script/text()";
    var result = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.STRING_TYPE,
      null
    );
    var jsonString = result.stringValue;

    var videoDetail = JSON.parse(jsonString);
  };

  // Login to extension
  const checkPage = () => {
    const link = window.location.href;

      if (
        link === "https://ai.soobati.com/dashboard/profile" ||
        "http://localhost:3000/dashboard/profile"
      ) {
        console.log("inside if");
        const alldiv = document.querySelectorAll("div");
        console.log("alldiv", alldiv);
        // all divs id
        alldiv.forEach((div) => {
          console.log("div", div);
        });

        const loginButton = document.querySelector(
          "#extension-login"
        ) as HTMLButtonElement;
        loginButton.click();

        // const loginButton = document.querySelector(
      }
    };

  // login to extension end



  useEffect(() => {
    let title: any = document.title;
    let head = document.head;
    let description: any = head.querySelector('meta[name="description"]');
    let keyword: any = head.querySelector('meta[name="keywords"]');

    const handleLoad = () => {
      try {
        let innerText = document.body.innerText;
        let innerHTML = document.body.innerHTML;

        console.log("innerText", { innerText, innerHTML });

        const url = window.location.href;
        setUrl(url);
        if (url.startsWith("https://chatgpt.com/")) {
          const doc: any = document.querySelector('div[role="presentation"]');
          innerHTML = doc.innerHTML;
          innerText = doc.innerText;
        }
        if (isYoutube(url)) {
          const doc: any = document.querySelector(
            "ytd-video-primary-info-renderer"
          );
          title = document.title;
          head = document.head;
          description = head.querySelector('meta[name="description"]');
          keyword = head.querySelector('meta[name="keywords"]');
        }

        const handleMessage = async (message) => {
          if (message.action === "bookmarkSaved") {
            console.log("inside BookmarkSaved");
            const ytLink = message?.data?.link
              ? message.data.link
              : message.data.url;

            console.log("ytLink", { ytLink, data: message.data });
            // return;
            let compressedHTML: any = "";
            let cleanCompressedHTML: any = "";
            console.log("ytLink", { ytLink, isYt: isYoutube(ytLink) });
            if (!isYoutube(ytLink)) {
              console.log("278");

              const cleanHTML = removeAllAttributesFromHTML(innerHTML);
              console.log("281", { cleanHTML });
              cleanCompressedHTML = compressString(cleanHTML);
              // console.log("283",{compressedHTML})
              // cleanCompressedHTML = compressedHTML;
              // cleanCompressedHTML = decompressString(cleanHTML);
              // console.log("285")

              // const decompressedHTML = decompressString(compressedHTML);
              console.log("288");
              console.log(
                {
                  // innerText,
                  // innerHTML,
                  // cleanHTML,
                  // compressedHTML,
                  cleanCompressedHTML,
                  // decompressedHTML,
                },
                "NEW"
              );
            }

            if (isYoutube(ytLink)) {
              const videoId = new URL(ytLink).searchParams.get("v");

              const { title, subtitles, description } =
                await getYTSubtitleFromPage(ytLink);

              const compressSubtitle = compressString(subtitles);

              console.log(
                {
                  compressSubtitle,
                  decompressString: decompressString(compressSubtitle),
                },
                "NEW from 310 NEW from 310"
              );

              // return;

              const res = await _bookmarkAccountService.createBookmark({
                title,
                url: ytLink,
                videoDetails: compressSubtitle,
                description,
                tags: keyword?.content.split(",") || [],
                videoId: videoId,
                directSave: true,
              });
              console.log("Response from saveBookmarkCallApi", res);
            } else {
              console.log("330");

              const res = await _bookmarkAccountService.createBookmark({
                title,
                url: window.location.href,
                // text: innerText,
                htmlDetails: cleanCompressedHTML,
                description: description?.content,
                tags: keyword?.content.split(",") || [],
                directSave: true,
              });
              console.log("Response from saveBookmarkCallApi", res);
            }

            setData(message.data);
            setNotification(true);
            setTimeout(() => setNotification(false), 3000); // Hide after 3 seconds
          }
        };

        chrome.runtime.onMessage.addListener(handleMessage);

        // Clean up the listener on component unmount
        return () => {
          chrome.runtime.onMessage.removeListener(handleMessage);
        };
      } catch (error) {
        console.error("Error in content script:", error);
      }
      addGiveSummaryButton(window.location.href);
    };

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      handleLoad();
      addLinkedInButtons();
      checkPage();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  function removeAllAttributesFromHTML(html) {
    // Create a temporary container to manipulate the HTML
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = html;

    // Function to remove all attributes from an element
    const removeAllAttributes = (element) => {
      while (element.attributes.length > 0) {
        element.removeAttribute(element.attributes[0].name);
      }
    };

    // Function to recursively remove attributes from all elements in the container
    const traverseAndClean = (node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        removeAllAttributes(node);
      }
      Array.from(node.childNodes).forEach(traverseAndClean);
    };

    // Traverse the child nodes of the container
    Array.from(tempContainer.childNodes).forEach(traverseAndClean);

    // Return the cleaned HTML as a string
    return tempContainer.innerHTML;
  }

  const addLinkedInButtons = () => {
    const processedPosts = new Set();
    let observer;

    const addButton = () => {
      const els = document.querySelectorAll(".feed-shared-control-menu");
      els.forEach((div) => {
        let postElement = div.closest(".feed-shared-update-v2");
        if (!postElement) {
          postElement = div.closest(".feed-shared-update-v2__control-menu");
        }
        if (!postElement) return;
        const postId = postElement.getAttribute("data-urn");

        if (
          !div.querySelector(".additional-button") &&
          !processedPosts.has(postId)
        ) {
          const newButton = document.createElement("button");

          newButton.innerHTML = `
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#fff"/>
          </svg>
        `;
          newButton.style.borderRadius = "100%";
          newButton.style.background =
            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
          newButton.style.cursor = "pointer";
          newButton.style.display = "flex";
          newButton.style.alignItems = "center";
          newButton.style.justifyContent = "center";
          newButton.style.width = "30px";
          newButton.style.height = "30px";
          newButton.classList.add("additional-button");

          newButton.addEventListener("mouseover", () => {
            newButton.style.background =
              "linear-gradient(270deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"; // Adjust color as needed
          });
          newButton.addEventListener("mouseout", () => {
            newButton.style.background =
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
          });

          newButton.addEventListener("click", async (event) => {
            event.preventDefault();
            await chrome.storage.local.set({ currentId: postId });
            await chrome.storage.local.set({ tag: "linkedin" });

            async function fetchLinkedInPostData(postId) {
              try {
                // Fetch the HTML content of the LinkedIn post
                const response = await axios.get(
                  `https://www.linkedin.com/embed/feed/update/${postId}`
                );
                const htmlString = response.data;

                // Parse the HTML string and extract the necessary information
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, "text/html");
                const postData = extractLinkedInPostData(doc);

                console.log("Post Data 312", postData);
                return postData;
              } catch (error) {
                console.error("Error fetching LinkedIn post data:", error);
              }
            }
            await fetchLinkedInPostData(postId);

            const postContent =
              (
                postElement.querySelector(
                  ".feed-shared-update-v2__description"
                ) as HTMLElement
              )?.innerText || "";
            const postAuthor =
              (
                postElement.querySelector(
                  ".feed-shared-actor__name"
                ) as HTMLElement
              )?.innerText || "";
            const postDate =
              (postElement.querySelector("time") as HTMLElement)?.getAttribute(
                "datetime"
              ) || "";

            const postData = {
              id: postId,
              content: postContent,
              author: postAuthor,
              date: postDate,
            };
            console.log("postData", { postData });
          });

          newButton.addEventListener("click", async (event) => {
            event.preventDefault();
            await chrome.storage.local.set({ currentId: postId });
            await chrome.storage.local.set({ tag: "linkedin" });
            chrome.runtime.sendMessage({ action: "openPopup" });
          });
          div.append(newButton);
          processedPosts.add(postId);
        }
      });
    };

    function extractLinkedInPostData(document) {
      const postData: any = {};

      // Extract author name and profile link
      const authorElement: any = document.querySelector(
        '[data-test-id="main-feed-activity-card__header"] a'
      ) as HTMLElement;
      if (authorElement) {
        postData.authorName = authorElement.innerText;
        postData.authorProfileLink = authorElement.href;
      }

      // Extract post content
      const contentElement = document.querySelector(
        '[data-test-id="main-feed-activity-embed-card__commentary"]'
      ) as HTMLElement;
      if (contentElement) {
        postData.content = contentElement.innerText;
      }

      // Extract image URL
      const imageElement = document.querySelector(
        '[data-test-id="feed-images-content__list-item"] img'
      ) as HTMLImageElement;
      if (imageElement) {
        postData.imageUrl = imageElement.getAttribute("data-delayed-url");
      }
      if (postData.imageUrl) {
        postData.imageUrl = postData.imageUrl.split("?")[0];
      } else {
        const videoElement = document.querySelector(
          '[data-test-id="feed-shared-update-v2__video"]'
        );
        if (videoElement) {
          postData.videoUrl = videoElement.getAttribute("src");
        }
      }

      if (imageElement?.src) {
        postData.imageUrl = imageElement.src;
      }

      // Extract number of reactions
      const reactionsElement = document.querySelector(
        '[data-test-id="social-actions__reaction-count"]'
      ) as HTMLElement;
      if (reactionsElement) {
        postData.reactions = reactionsElement.innerText;
      }

      // Extract number of comments
      const commentsElement = document.querySelector(
        '[data-test-id="social-actions__comments"]'
      ) as HTMLElement;
      if (commentsElement) {
        postData.comments = commentsElement.innerText;
      }

      return postData;
    }

    // Usage
    // const linkedInPostData = extractLinkedInPostData();
    // console.log(linkedInPostData);

    const observeMutations = () => {
      const targetNode = document.body;
      const config = { childList: true, subtree: true };

      const callback = (mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            addButton();
          }
        }
      };

      observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    };

    observeMutations();
  };

  // Add Give Summary Button on the page
  function addGiveSummaryButton(url) {
    console.log({
      url,
      isYoutube: isYoutube(url),
      isLinkedIn: isLinkedIn(url),
    });
    if (isYoutube(url)) {
      // Create a new button element
      const div = document.createElement("div");

      // add html content to the button
      div.innerHTML = `
    <button id="give-summary" style="position: fixed; bottom: 10px; right: 10px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Give Summary</button>
  `;

      // add click event listener to the button
      div.querySelector("#give-summary").addEventListener("click", async () => {
        const title = document.title;
        const subtitle = await getYTSubtitleFromPage(document);
      });

      // Append the button to the body in id 'owner'
      const owner = document.getElementById("owner");
      owner.appendChild(div);
    } else if (isLinkedIn(url)) {
      // Add LinkedIn Summary Button

      addLinkedInButtons();
      // End LinkedIn Summary Button
    }
  }

  async function getSummary(title) {
    const subtitle = await getYTSubtitleFromPage(document);
    const generateSummaryPrompt = (title, subtitleText) => {
      return `This is a YouTube video titled "${title}". The following text is the subtitle transcript of the video. Please provide a detailed, pointwise summary of the key points discussed in the video. If the video mentions specific numbered points or steps, include those in the summary as well. Here is the subtitle text: "${subtitleText}".`;
    };

    const summaryContent = await generateContent(
      generateSummaryPrompt(title, subtitle)
    );
  }

  // Add Button on page

  useEffect(() => {
    const createButton = () => {
      const button = document.createElement("button");
      button.id = "give-summary";
      button.style.position = "absolute";

      button.style.backgroundColor = "transparent";
      button.style.color = "white";
      button.style.border = "none";
      button.style.borderRadius = "5px";
      button.style.cursor = "pointer";
      button.style.display = "flex";
      button.style.alignItems = "center";

      // Add base64 image as innerHTML

      button.innerHTML = `<img src="${LOGO_BASE64}" alt="icon" style="width: 20px; height: 20px; margin-right: 5px; vertical-align: middle; border-radius: 9999px;">`;

      return button;
    };

    const addButtonToThumbnail = (thumbnail) => {
      if (!thumbnail.querySelector("#give-summary")) {
        const button = createButton();
        thumbnail.style.position = "relative";
        thumbnail.appendChild(button);

        // Prevent autostart and remove button
        button.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();
          const videoId = thumbnail.querySelector("a").href.split("v=")[1];
          console.log("Button clicked!", { videoId });
          // Add your button click logic here
        });

        // Observe changes to re-add the button if it gets removed
        const thumbnailObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (!thumbnail.querySelector("#give-summary")) {
              thumbnail.appendChild(button);
            }
          });
        });

        thumbnailObserver.observe(thumbnail, {
          childList: true,
          subtree: true,
        });
      }
    };

    const addButtonsToThumbnails = () => {
      const thumbnails = document.querySelectorAll("ytd-thumbnail");
      thumbnails.forEach((thumbnail) => {
        addButtonToThumbnail(thumbnail);
      });
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          addButtonsToThumbnails();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial call to add buttons to existing thumbnails
    addButtonsToThumbnails();

    return () => observer.disconnect();
  }, []);

  // end

  useEffect(() => {
    const addComponentToSpecificDiv = async () => {
      const targetDivs = document.querySelectorAll("#expandable-metadata");
      if (targetDivs.length) {
        const targetDiv = targetDivs[0]; // Change the index based on your criteria
        const rootDiv = document.createElement("div");
        targetDiv.appendChild(rootDiv);

        const ytLink = window.location.href;

        const videoId = new URL(ytLink).searchParams.get("v");

        const { title, subtitles, description } = await getYTSubtitleFromPage(
          ytLink
        );

        const compressSubtitle = compressString(subtitles);

        const root = createRoot(rootDiv);
        root.render(
          <YoutubeButtons
            title={title}
            videoId={videoId}
            videoDetails={compressSubtitle}
          />
        );
      } else {
        console.error(
          "Target div with ID 'header' not found or less than 5 divs."
        );
      }
    };

    const observeDOM = () => {
      const observer = new MutationObserver((mutations, observer) => {
        const targetDivs = document.querySelectorAll("#header");
        if (targetDivs.length > 4) {
          observer.disconnect(); // Stop observing once the div is found
          addComponentToSpecificDiv();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      observeDOM();
    } else {
      window.addEventListener("DOMContentLoaded", observeDOM);
    }
  }, []);

  // remoce component

  return (
    <div>
      {notification && <div>Bookmark saved!</div>}
      <div>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Header
        </h1>
      </div>
      {/* Render other components or data as needed */}
    </div>
  );
};

// Inject the React app into the content script's context
const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

////////

// "use client";

// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import { _bookmarkAccountService } from "../utils/services";
// import { compressString } from "../utils/compressfunc";
// import YoutubeButtons from "../components/App/YoutubeButtons";
// import { createRoot } from "react-dom/client";
// import { LOGO_BASE64 } from "../utils/constant";
// import { getYTSubtitleFromPage } from "../utils/getYTSubtitleFromPage";

// const App = () => {
//   const [data, setData] = useState(null);
//   const [notification, setNotification] = useState(false);
//   const [url, setUrl] = useState("");

//   const isYoutube = (url) => {
//     return (
//       url.startsWith("https://www.youtube.com/") ||
//       url.startsWith("https://youtube.com/") ||
//       url.startsWith("https://m.youtube.com/")
//     );
//   };

//   const isLinkedIn = (url) => {
//     return url.startsWith("https://www.linkedin.com/");
//   };

//   useEffect(() => {
//     let title = document.title;
//     let head = document.head;
//     let description = head.querySelector('meta[name="description"]');
//     let keyword :any= head.querySelector('meta[name="keywords"]') as HTMLElement

//     const handleLoad = () => {
//       try {
//         let innerHTML = document.body.innerHTML;

//         const url = window.location.href;
//         setUrl(url);

//         const handleMessage = async (message) => {
//           if (message.action === "bookmarkSaved") {
//             const ytLink = message?.data?.link
//               ? message.data.link
//               : message.data.url;

//             if (!isYoutube(ytLink)) {
//               const { postData } = await chrome.storage.local.get("postData");
//               const cleanCompressedHTML = compressString(postData.content);

//               const res = await _bookmarkAccountService.createBookmark({
//                 title: postData.author,
//                 url: window.location.href,
//                 htmlDetails: cleanCompressedHTML,
//                 description: postData.content,
//                 tags: [],
//                 directSave: true,
//               });
//               console.log("Response from saveBookmarkCallApi", res);
//             } else {
//               const videoId = new URL(ytLink).searchParams.get("v");
//               const { title, subtitles, description } =
//                 await getYTSubtitleFromPage(ytLink);
//               const compressSubtitle = compressString(subtitles);

//               const res = await _bookmarkAccountService.createBookmark({
//                 title,
//                 url: ytLink,
//                 videoDetails: compressSubtitle,
//                 description,
//                 tags: keyword?.content.split(",") || [],
//                 videoId: videoId,
//                 directSave: true,
//               });
//               console.log("Response from saveBookmarkCallApi", res);
//             }

//             setData(message.data);
//             setNotification(true);
//             setTimeout(() => setNotification(false), 3000); // Hide after 3 seconds
//           }
//         };

//         chrome.runtime.onMessage.addListener(handleMessage);

//         // Clean up the listener on component unmount
//         return () => {
//           chrome.runtime.onMessage.removeListener(handleMessage);
//         };
//       } catch (error) {
//         console.error("Error in content script:", error);
//       }
//       addGiveSummaryButton(window.location.href);
//     };

//     if (
//       document.readyState === "complete" ||
//       document.readyState === "interactive"
//     ) {
//       handleLoad();
//     } else {
//       window.addEventListener("load", handleLoad);
//       return () => window.removeEventListener("load", handleLoad);
//     }
//   }, []);

//   function removeAllAttributesFromHTML(html) {
//     const tempContainer = document.createElement("div");
//     tempContainer.innerHTML = html;

//     const removeAllAttributes = (element) => {
//       while (element.attributes.length > 0) {
//         element.removeAttribute(element.attributes[0].name);
//       }
//     };

//     const traverseAndClean = (node) => {
//       if (node.nodeType === Node.ELEMENT_NODE) {
//         removeAllAttributes(node);
//       }
//       Array.from(node.childNodes).forEach(traverseAndClean);
//     };

//     Array.from(tempContainer.childNodes).forEach(traverseAndClean);

//     return tempContainer.innerHTML;
//   }

//   function addGiveSummaryButton(url) {
//     if (isYoutube(url)) {
//       const div = document.createElement("div");
//       div.innerHTML = `
//     <button id="give-summary" style="position: fixed; bottom: 10px; right: 10px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Give Summary</button>
//   `;

//       div.querySelector("#give-summary").addEventListener("click", async () => {
//         const title = document.title;
//         const subtitle = await getYTSubtitleFromPage(document);
//       });

//       const owner = document.getElementById("owner");
//       owner.appendChild(div);
//     } else if (isLinkedIn(url)) {
//       const addLinkedInButtons = () => {
//         const processedPosts = new Set();
//         let observer;

//         const addButton = () => {
//           const els = document.querySelectorAll(".feed-shared-control-menu");
//           els.forEach((div) => {
//             let postElement = div.closest(".feed-shared-update-v2");
//             if (!postElement) {
//               postElement = div.closest(".feed-shared-update-v2__control-menu");
//             }
//             if (!postElement) return;
//             const postId = postElement.getAttribute("data-urn");

//             if (
//               !div.querySelector(".additional-button") &&
//               !processedPosts.has(postId)
//             ) {
//               const newButton = document.createElement("button");

//               newButton.innerHTML = `
//               <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#fff"/>
//               </svg>
//             `;
//               newButton.style.borderRadius = "100%";
//               newButton.style.background =
//                 "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
//               newButton.style.cursor = "pointer";
//               newButton.style.display = "flex";
//               newButton.style.alignItems = "center";
//               newButton.style.justifyContent = "center";
//               newButton.style.width = "30px";
//               newButton.style.height = "30px";
//               newButton.classList.add("additional-button");

//               newButton.addEventListener("mouseover", () => {
//                 newButton.style.background =
//                   "linear-gradient(270deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"; // Adjust color as needed
//               });
//               newButton.addEventListener("mouseout", () => {
//                 newButton.style.background =
//                   "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
//               });

//               newButton.addEventListener("click", async (event) => {
//                 event.preventDefault();
//                 await chrome.storage.local.set({ currentId: postId });
//                 await chrome.storage.local.set({ tag: "linkedin" });

//                 const postContent = (postElement.querySelector(".feed-shared-update-v2__description") as HTMLElement)?.innerText || "";
//                 const postAuthor = (postElement.querySelector(".feed-shared-actor__name")as HTMLElement)?.innerText || "";
//                 const postDate = (postElement.querySelector("time")as HTMLElement)?.getAttribute('datetime') || "";

//                 const postData = {
//                   id: postId,
//                   content: postContent,
//                   author: postAuthor,
//                   date: postDate,
//                 };

//                 await chrome.storage.local.set({ postData });

//                 chrome.runtime.sendMessage({ action: "openPopup" });
//               });
//               div.append(newButton);
//               processedPosts.add(postId);
//             }
//           });
//         };

//         const observeMutations = () => {
//           const targetNode = document.body;
//           const config = { childList: true, subtree: true };

//           const callback = (mutationsList) => {
//             for (const mutation of mutationsList) {
//               if (mutation.type === "childList") {
//                 addButton();
//               }
//             }
//           };

//           observer = new MutationObserver(callback);
//           observer.observe(targetNode, config);
//         };

//         observeMutations();
//       };

//       addLinkedInButtons();
//     }
//   }

//   async function getSummary(title) {
//     const subtitle = await getYTSubtitleFromPage(document);
//     const generateSummaryPrompt = (title, subtitleText) => {
//       return `This is a YouTube video titled "${title}". The following text is the subtitle transcript of the video. Please provide a detailed, pointwise summary of the key points discussed in the video. If the video mentions specific numbered points or steps, include those in the summary as well. Here is the subtitle text: "${subtitleText}".`;
//     };

//     const summaryContent = await generateContent(
//       generateSummaryPrompt(title, subtitle)
//     );
//   }

//   useEffect(() => {
//     const createButton = () => {
//       const button = document.createElement("button");
//       button.id = "give-summary";
//       button.style.position = "absolute";

//       button.style.backgroundColor = "transparent";
//       button.style.color = "white";
//       button.style.border = "none";
//       button.style.borderRadius = "5px";
//       button.style.cursor = "pointer";
//       button.style.display = "flex";
//       button.style.alignItems = "center";

//       button.innerHTML = `<img src="${LOGO_BASE64}" alt="icon" style="width: 20px; height: 20px; margin-right: 5px; vertical-align: middle; border-radius: 9999px;">`;

//       return button;
//     };

//     const addButtonToThumbnail = (thumbnail) => {
//       if (!thumbnail.querySelector("#give-summary")) {
//         const button = createButton();
//         thumbnail.style.position = "relative";
//         thumbnail.appendChild(button);

//         button.addEventListener("click", (e) => {
//           e.stopPropagation();
//           e.preventDefault();
//           const videoId = thumbnail.querySelector("a").href.split("v=")[1];
//           console.log("Button clicked!", { videoId });
//         });

//         const thumbnailObserver = new MutationObserver((mutations) => {
//           mutations.forEach((mutation) => {
//             if (!thumbnail.querySelector("#give-summary")) {
//               thumbnail.appendChild(button);
//             }
//           });
//         });

//         thumbnailObserver.observe(thumbnail, {
//           childList: true,
//           subtree: true,
//         });
//       }
//     };

//     const addButtonsToThumbnails = () => {
//       const thumbnails = document.querySelectorAll("ytd-thumbnail");
//       thumbnails.forEach((thumbnail) => {
//         addButtonToThumbnail(thumbnail);
//       });
//     };

//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === "childList") {
//           addButtonsToThumbnails();
//         }
//       });
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });

//     addButtonsToThumbnails();

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const addComponentToSpecificDiv = async () => {
//       const targetDivs = document.querySelectorAll("#expandable-metadata");
//       if (targetDivs.length) {
//         const targetDiv = targetDivs[0];
//         const rootDiv = document.createElement("div");
//         targetDiv.appendChild(rootDiv);

//         const ytLink = window.location.href;

//         const videoId = new URL(ytLink).searchParams.get("v");

//         const { title, subtitles, description } = await getYTSubtitleFromPage(
//           ytLink
//         );

//         const compressSubtitle = compressString(subtitles);

//         const root = createRoot(rootDiv);
//         root.render(
//           <YoutubeButtons
//             title={title}
//             videoId={videoId}
//             videoDetails={compressSubtitle}
//           />
//         );
//       } else {
//         console.error(
//           "Target div with ID 'header' not found or less than 5 divs."
//         );
//       }
//     };

//     const observeDOM = () => {
//       const observer = new MutationObserver((mutations, observer) => {
//         const targetDivs = document.querySelectorAll("#header");
//         if (targetDivs.length > 4) {
//           observer.disconnect();
//           addComponentToSpecificDiv();
//           addGiveSummaryButton(window.location.href);
//         }
//       });

//       observer.observe(document.body, {
//         childList: true,
//         subtree: true,
//       });
//     };

//     if (
//       document.readyState === "complete" ||
//       document.readyState === "interactive"
//     ) {
//       observeDOM();
//     } else {
//       window.addEventListener("DOMContentLoaded", observeDOM);
//     }
//   }, []);

//   return (
//     <div>
//       {notification && <div>Bookmark saved!</div>}
//       <div>
//         <h1
//           style={{
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//             color: "black",
//           }}
//         >
//           Header
//         </h1>
//       </div>
//     </div>
//   );
// };

// const root = document.createElement("div");
// document.body.appendChild(root);
// ReactDOM.render(<App />, root);
