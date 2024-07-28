// import React, { useEffect, useState } from "react";
// import { _bookmarkAccountService } from "../../utils/services";
// import pako from "pako";
// import { Buffer } from "buffer";
// import ReactMarkdown from "react-markdown";
// import { LOGO_BASE64 } from "../../utils/constant";
// import { compressString } from "../../utils/compressfunc";
// import { getYTSubtitleFromPage } from "../../utils/getYTSubtitleFromPage";
// import useLocation from "./useLocations";

// const ShowSummary = ({ title, videoId, videoDetails }) => {
//   const currentUrl = useLocation();
//   const decompressBufferString = (str: string) => {
//     const bf = Buffer.from(str, "base64");
//     const decompressedSummary = pako.inflate(bf, { to: "string" });
//     return decompressedSummary;
//   };

//   const [loading, setLoading] = useState(true);

//   const [isTyping, setIsTyping] = useState(true);
//   const [fullResponse, setFullResponse] = useState("");
//   const [typingIndex, setTypingIndex] = useState(0);
//   const [response, setResponse] = useState("");
//   const [savedBookmark, setSavedBookmark] = useState(false);

//   //   check localstorage
//   const checkLocalStorage = (videoId) => {
//     const bookmark = localStorage.getItem(videoId);
//     if (bookmark) {
//       return true;
//     }

//     return false;
//   };
//   const add2LocalStorage = (videoId, summary) => {
//     // only add 5 in sequence if more remove the first one
//     const queue = JSON.parse(localStorage.getItem("summaryQueue")) || [];
//     if (queue.length >= 5) {
//       const videoId = queue.shift();
//       localStorage.removeItem(videoId);
//       //now video id is reoved from queue now save the new queue array in localstorage
//       localStorage.setItem("summaryQueue", JSON.stringify(queue));
//     } else {
//       queue.push(videoId);
//       localStorage.setItem("summaryQueue", JSON.stringify(queue));
//       localStorage.setItem(videoId, JSON.stringify(summary));
//     }
//   };

//   const fetchBookmark = async () => {
//     try {
//       setIsTyping(false);
//       setLoading(true);
//       const ytLink = window.location.href;
//       const videoId = new URL(ytLink).searchParams.get("v");

//       if (checkLocalStorage(videoId)) {
//         const summary = JSON.parse(localStorage.getItem(videoId));
//         const decompressed = summary;
//         setFullResponse(decompressed); // Set the full response text
//         setIsTyping(true); // Start typing effect
//         setTypingIndex(0); // Reset typing index
//         setResponse(""); // Clear current response
//       } else {
//         const { title, subtitles, description } = await getYTSubtitleFromPage(
//           ytLink
//         );
//         const videoDetails = compressString(subtitles);

//         const res = await _bookmarkAccountService.getSummaryByVideoId({
//           title,
//           videoId,
//           videoDetails,
//         });

//         if (res.statusCode === 200) {
//           // Save to localstorage
//           const decompressed = decompressBufferString(res.data.summary);
//           add2LocalStorage(videoId, decompressed);
//           setFullResponse(decompressed); // Set the full response text
//           setIsTyping(true); // Start typing effect
//           setTypingIndex(0); // Reset typing index
//           setResponse(""); // Clear current response
//         } else {
//           throw new Error(res.message);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching bookmark:", error);
//     } finally {
//       setIsTyping(true);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookmark();
//   }, []);

//   useEffect(() => {
//     if (isTyping && typingIndex < fullResponse.length) {
//       const timeout = setTimeout(() => {
//         setResponse((prev) => prev + fullResponse.charAt(typingIndex));
//         setTypingIndex((prev) => prev + 1);
//       }, 20);
//       return () => clearTimeout(timeout);
//     } else {
//       //   setIsTyping(false);
//     }

//     return () => {
//       //   setIsTyping(false);
//     };
//   }, [isTyping, typingIndex, fullResponse]);

//   const saveSummary = async () => {
//     const res = await _bookmarkAccountService.createBookmark({
//       title,
//       videoId,
//       videoDetails,
//       url: `https://www.youtube.com/watch?v=${videoId}`,
//     });
//     if (res.statusCode === 200) {
//       console.log("Summary saved successfully");
//       setSavedBookmark(true);
//     }
//   };

//   useEffect(() => {
//     console.log("Running Useeffedt");
//     let timeout;
//     if (savedBookmark) {
//       console.log("Saved bookmark:", savedBookmark);
//       timeout = setTimeout(() => {
//         setSavedBookmark(false);
//       }, 2000);
//     } else {
//     }

//     return () => clearTimeout(timeout);
//   }, [savedBookmark]);
//   const toggleTyping = () => {
//     setIsTyping(!isTyping); // Toggle the isTyping state
//   };

//   return loading ? (
//     <img
//       // plus animation
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "#462FEB",
//         borderRadius: "50%",
//         animation: "pulse 2s infinite",
//       }}
//       src={LOGO_BASE64}
//     />
//   ) : (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "end",
//           alignItems: "center",
//           marginTop: "-40px",
//         }}
//       >
//         <button
//           onClick={saveSummary}
//           style={buttonStyle}
//         >
//           Save Summary
//         </button>
//         <button
//           onClick={toggleTyping}
//           style={{
//             // backgroundColor: { isTyping } ? "#FF0000" : "#00FF00",
//             color: "white",
//             // padding: "10px",
//             // borderRadius: "10px",
//             border: "none",
//             cursor: "pointer",
//             marginLeft: "10px",
//           }}
//         >
//           {isTyping ? (
//             <svg viewBox="0 0 24 24" width="24" height="24" fill="FF0000">
//               <path d="M6 6h12v12H6z"></path>
//             </svg>
//           ) : (
//             <svg viewBox="0 0 24 24" width="24" height="24" fill="00FF00">
//               <path d="M8 5v14l11-7z"></path>
//             </svg>
//           )}
//         </button>
//         <button
//           onClick={fetchBookmark}
//           style={{
//             // backgroundColor: { isTyping } ? "#FF0000" : "#00FF00",
//             color: "white",
//             // padding: "10px",
//             // borderRadius: "10px",
//             border: "none",
//             cursor: "pointer",
//             marginLeft: "10px",
//           }}
//         >
//           <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000">
//             <path d="M12 2V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.66-.67 3.15-1.76 4.24l1.42 1.42A7.939 7.939 0 0020 12c0-4.42-3.58-8-8-8zm-6 10c0-1.66.67-3.15 1.76-4.24L5.34 6.34A7.939 7.939 0 004 12c0 4.42 3.58 8 8 8v1l4-4-4-4v3c-3.31 0-6-2.69-6-6z" />
//           </svg>
//         </button>
//       </div>

//       <ReactMarkdown>{response}</ReactMarkdown>

//       {savedBookmark && (
//         <div
//           // on top of al the content
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "green",
//             padding: "20px",
//             borderRadius: "10px",
//             color: "white",
//           }}
//         >
//           <p>Summary saved successfully!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const buttonStyle: React.CSSProperties = {
//   padding: "1rem 2rem",
//   borderRadius: "5px",
//   border: "none",
//   color: "white",
//   textTransform: "capitalize",
//   cursor: "pointer",
//   fontWeight: "bold",
// };

// export default ShowSummary;



import React, { useEffect, useState } from "react";
import { _bookmarkAccountService } from "../../utils/services";
import pako from "pako";
import { Buffer } from "buffer";
import ReactMarkdown from "react-markdown";
import { LOGO_BASE64 } from "../../utils/constant";
import { compressString } from "../../utils/compressfunc";
import { getYTSubtitleFromPage } from "../../utils/getYTSubtitleFromPage";
import useLocation from "./useLocations";

const ShowSummary = ({ title, videoId, videoDetails }) => {
  const currentUrl = useLocation();
  const [loading, setLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [fullResponse, setFullResponse] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [savedBookmark, setSavedBookmark] = useState(false);

  const decompressBufferString = (str: string) => {
    const bf = Buffer.from(str, "base64");
    return pako.inflate(bf, { to: "string" });
  };

  const checkLocalStorage = (videoId) => {
    return localStorage.getItem(videoId) !== null;
  };

  const add2LocalStorage = (videoId, summary) => {
    const queue = JSON.parse(localStorage.getItem("summaryQueue")) || [];
    if (queue.length >= 5) {
      const removedId = queue.shift();
      localStorage.removeItem(removedId);
    }
    queue.push(videoId);
    localStorage.setItem("summaryQueue", JSON.stringify(queue));
    localStorage.setItem(videoId, JSON.stringify(summary));
  };

  const fetchBookmark = async () => {
    try {
      setIsTyping(false);
      setLoading(true);
      const ytLink = window.location.href;
      const videoId = new URL(ytLink).searchParams.get("v");

      if (checkLocalStorage(videoId)) {
        const summary = JSON.parse(localStorage.getItem(videoId));
        setFullResponse(summary);
      } else {
        const { title, subtitles, description } = await getYTSubtitleFromPage(ytLink);
        const videoDetails = compressString(subtitles);

        const res = await _bookmarkAccountService.getSummaryByVideoId({
          title,
          videoId,
          videoDetails,
        });

        if (res.statusCode === 200) {
          const decompressed = decompressBufferString(res.data.summary);
          add2LocalStorage(videoId, decompressed);
          setFullResponse(decompressed);
        } else {
          throw new Error(res.message);
        }
      }
      setTypingIndex(0);
      setResponse("");
      setIsTyping(true);
    } catch (error) {
      console.error("Error fetching bookmark:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmark();
  }, []);

  useEffect(() => {
    if (isTyping && typingIndex < fullResponse.length) {
      const timeout = setTimeout(() => {
        setResponse((prev) => prev + fullResponse.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, typingIndex, fullResponse]);

  const saveSummary = async () => {
    const res = await _bookmarkAccountService.createBookmark({
      title,
      videoId,
      videoDetails,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    });
    if (res.statusCode === 200) {
      setSavedBookmark(true);
    }
  };

  useEffect(() => {
    if (savedBookmark) {
      const timeout = setTimeout(() => {
        setSavedBookmark(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [savedBookmark]);

  const toggleTyping = () => {
    setIsTyping(!isTyping);
  };

  return loading ? (
    <img
      style={loadingStyle}
      src={LOGO_BASE64}
    />
  ) : (
    <div>
      <div style={buttonContainerStyle}>
        <button onClick={saveSummary} style={buttonStyle}>
          Save Summary
        </button>
        <button onClick={toggleTyping} style={buttonStyleSVG}>
          {isTyping ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="red">
              <path d="M6 6h12v12H6z"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="green">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          )}
        </button>
        <button onClick={fetchBookmark} style={buttonStyleSVG}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#000000">
            <path d="M12 2V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.66-.67 3.15-1.76 4.24l1.42 1.42A7.939 7.939 0 0020 12c0-4.42-3.58-8-8-8zm-6 10c0-1.66.67-3.15 1.76-4.24L5.34 6.34A7.939 7.939 0 004 12c0 4.42 3.58 8 8 8v1l4-4-4-4v3c-3.31 0-6-2.69-6-6z" />
          </svg>
        </button>
      </div>
      <ReactMarkdown>{response}</ReactMarkdown>
      {savedBookmark && (
        <div style={savedMessageStyle}>
          <p>Summary saved successfully!</p>
        </div>
      )}
    </div>
  );
};

const loadingStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  backgroundColor: "#462FEB",
  borderRadius: "50%",
  animation: "pulse 2s infinite",
};

const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "-60px",
  gap: "10px",
};



const buttonStyle: React.CSSProperties = {
  padding: "1rem 2rem",
  borderRadius: "5px",
  border: "none",
  color: "white",
  backgroundColor: "#4456FF",
  textTransform: "capitalize",
  cursor: "pointer",
  fontWeight: "bold",
  marginLeft: "10px",
};

const buttonStyleSVG: React.CSSProperties = {
  padding: "1rem 2rem",
  borderRadius: "5px",
  border: "none",
  color: "#4456FF",
  backgroundColor: "white",
  textTransform: "capitalize",
  cursor: "pointer",
  fontWeight: "bold",
  marginLeft: "10px",
};

const savedMessageStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "green",
  padding: "20px",
  borderRadius: "10px",
  color: "white",
  textAlign: "center",
};

export default ShowSummary;
