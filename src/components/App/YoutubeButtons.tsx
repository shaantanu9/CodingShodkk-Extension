// // import React, { useState, useEffect, useCallback } from "react";

// // const DemoComp = () => {

// //     const [isDemo, setIsDemo] = useState(false);

// //     const handleDemo = () => {
// //         setIsDemo(!isDemo);
// //     }

// //     return (
// //         <div>
// //         <button onClick={handleDemo}>Toggle Demo</button>
// //         {isDemo && <div>SecondBrain Demo</div>}
// //         </div>
// //     );
// //     }

// // export default DemoComp;

// import React, { useEffect, useState } from "react";
// import { _bookmarkAccountService } from "../../utils/services";
// import pako from "pako";

// const YoutubeButtons = ({ videoDetails, title, videoId }: any) => {
//   const [optionSelected, setOptionSelected] = useState<string | null>(null);
//   const isYoutubeLink = (url) => {
//     return url.includes("youtube.com") || url.includes("youtu.be");
//   };
//   const [loading, setLoading] = useState(true);
//   const [bookmark, setBookmark] = useState<any>({});
//   const [isTyping, setIsTyping] = useState(false);
//   const [fullResponse, setFullResponse] = useState("");
//   const [typingIndex, setTypingIndex] = useState(0);
//   const [response, setResponse] = useState("");

//   const options = ["summarize", "quiz", "notes"];
//   const decompressBufferString = (str) => {
//     const bf = Buffer.from(str, "base64");
//     const decompressedSummary = pako.inflate(bf, { to: "string" });
//     return decompressedSummary;
//   };

//   const renderContent = () => {
//     switch (optionSelected) {
//       case "summarize":
//         return <div>Summarize content goes here.</div>;
//       case "quiz":
//         return <div>Quiz content goes here.</div>;
//       case "notes":
//         return <div>Notes content goes here.</div>;
//       default:
//         return <div>Please select an option.</div>;
//     }
//   };

//   const fetchBookmark = async ({ title, videoId, videoDetails }: any) => {
//     console.log({
//       videoDetails,
//     });
//     try {
//       const res = await _bookmarkAccountService.getSummaryByVideoId({
//         title,
//         videoId,
//         videoDetails,
//       });
//       if (res.statusCode === 200) {
//         setBookmark(res.data);
//         const decompressed = decompressBufferString(res.data);
//         console.log({ decompressed });
//       } else {
//         throw new Error(res.message);
//       }
//     } catch (error) {
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     console.log({ optionSelected });
//     if (optionSelected === "summarize") {
//       fetchBookmark({ title, videoId, videoDetails });
//     }
//   }, [optionSelected]);

//   useEffect(() => {
//     if (isTyping && typingIndex < fullResponse.length) {
//       const timeout = setTimeout(() => {
//         setResponse((prev) => prev + fullResponse.charAt(typingIndex));
//         setTypingIndex((prev) => prev + 1);
//       }, 20);
//       return () => clearTimeout(timeout);
//     } else {
//       setIsTyping(false);
//     }
//   }, [isTyping, typingIndex, fullResponse]);

//   return (
//     <>
//       <div>
//         {options.map((option) => (
//           <button key={option} onClick={() => setOptionSelected(option)}>
//             {option}
//           </button>
//         ))}
//       </div>

//       <div>{renderContent()}</div>
//     </>
//   );
// };

// export default YoutubeButtons;

import React, { useEffect, useState } from "react";
import { _bookmarkAccountService } from "../../utils/services";
import pako from "pako";
import { Buffer } from "buffer";
import ReactMarkdown from "react-markdown";
import ShowSummary from './ShowSummary';

const YoutubeButtons = ({ videoDetails, title, videoId }: any) => {
  const [optionSelected, setOptionSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookmark, setBookmark] = useState<any>({});
  const [isTyping, setIsTyping] = useState(false);
  const [fullResponse, setFullResponse] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [response, setResponse] = useState("");

  const options = ["summarize", "quiz", "notes"];


 

  const renderContent = () => {
    switch (optionSelected) {
      case "summarize":
      return <ShowSummary title={title} videoId={videoId} videoDetails={videoDetails}
         />;
      case "quiz":
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // how to know screen is dark or light
              color: "black",
            }}
          >
            Quiz content goes here.
          </div>
        );
      case "notes":
        return <div>Notes content goes here.</div>;
      default:
        return <div>Please select an option.</div>;
    }
  };

 

  // useEffect(() => {
  //   if (optionSelected === "summarize") {
  //     fetchBookmark({ title, videoId, videoDetails });
  //   }
  // }, [optionSelected]);

  useEffect(() => {
    if (isTyping && typingIndex < fullResponse.length) {
      const timeout = setTimeout(() => {
        setResponse((prev) => prev + fullResponse.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [isTyping, typingIndex, fullResponse]);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "1rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textDecoration: "capitalize",
        fontSize: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setOptionSelected(option)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              border: "none",
              backgroundColor: optionSelected === option ? "#462FEB" : "#868CFF",
              color: "white",
              // capitalize
              textTransform: "capitalize",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default YoutubeButtons;
