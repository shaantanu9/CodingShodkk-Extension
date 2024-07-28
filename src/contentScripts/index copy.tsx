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

          newButton.innerHTML = `<img alt="" src="data:image/png;base64,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" />`
          newButton.style.borderRadius = "100%";
          newButton.style.background =
            // "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
            newButton.style.cursor = "pointer";
          newButton.style.display = "flex";
          newButton.style.alignItems = "center";
          newButton.style.justifyContent = "center";
          newButton.style.width = "30px";
          newButton.style.height = "30px";
          newButton.classList.add("additional-button");

          // newButton.addEventListener("mouseover", () => {
          //   newButton.style.background =
          //     "linear-gradient(270deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"; // Adjust color as needed
          // });
          // newButton.addEventListener("mouseout", () => {
          //   newButton.style.background =
          //     "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
          // });

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
