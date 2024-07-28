// import React, { useEffect, useState } from "react";
// import { _bookmarkAccountService } from "../../utils/services";
// import pako from "pako";
// import { Buffer } from "buffer";
// import ReactMarkdown from "react-markdown";
// import ShowSummary from './ShowSummary';
import TextEditor from "./Notes";
import QuizComponent from "./QuizComponent";

// const YoutubeButtons = ({ videoDetails, title, videoId }: any) => {
//   const [optionSelected, setOptionSelected] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [bookmark, setBookmark] = useState<any>({});
//   const [isTyping, setIsTyping] = useState(false);
//   const [fullResponse, setFullResponse] = useState("");
//   const [typingIndex, setTypingIndex] = useState(0);
//   const [response, setResponse] = useState("");

//   const options = ["summarize", "quiz", "notes"];

//   const renderContent = () => {
//     switch (optionSelected) {
//       case "summarize":
//       return <ShowSummary title={title} videoId={videoId} videoDetails={videoDetails}
//          />;
//       case "quiz":
//         return (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               // how to know screen is dark or light
//               color: "black",
//             }}
//           >
//             Quiz content goes here.
//           </div>
//         );
//       case "notes":
//         return <div>Notes content goes here.</div>;
//       default:
//         return <div>Please select an option.</div>;
//     }
//   };

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
//     <div
//       style={{
//         backgroundColor: "white",
//         padding: "1rem",
//         paddingLeft: "3rem",
//         paddingRight: "3rem",
//         borderRadius: "10px",
//         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//         display: "flex",
//         flexDirection: "column",
//         gap: "1rem",
//         textDecoration: "capitalize",
//         fontSize: "1.5rem",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: "1rem",
//         }}
//       >
//         {options.map((option) => (
//           <button
//             key={option}
//             onClick={() => setOptionSelected(option)}
//             style={{
//               padding: "0.5rem 1rem",
//               borderRadius: "5px",
//               border: "none",
//               backgroundColor: optionSelected === option ? "#462FEB" : "#868CFF",
//               color: "white",
//               // capitalize
//               textTransform: "capitalize",
//             }}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       <div
//         style={{
//           backgroundColor: "white",
//         }}
//       >
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default YoutubeButtons;

import React, { useEffect, useState } from "react";
import ShowSummary from "./ShowSummary";

interface YoutubeButtonsProps {
  videoDetails: any;
  title: string;
  videoId: string;
}

const YoutubeButtons: React.FC<YoutubeButtonsProps> = ({
  videoDetails,
  title,
  videoId,
}) => {
  const [optionSelected, setOptionSelected] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [fullResponse, setFullResponse] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const options = ["summarize", "quiz", "notes"];
  const primaryColor = "#4456FF";

  const renderContent = () => {
    switch (optionSelected) {
      case "summarize":
        return (
          <ShowSummary
            title={title}
            videoId={videoId}
            videoDetails={videoDetails}
          />
        );
      case "quiz":
        return (
          <div style={contentTextStyle}>
            Quiz content goes here.
            <QuizComponent url={`https://www.youtube.com/watch?v=${videoId}`} />
          </div>
        );
      case "notes":
        return (
          // <div style={contentTextStyle}>
          // {/* Notes content goes here. */}
          <TextEditor />
          // </div>
        );
      default:
        return <div style={contentTextStyle}>Please select an option.</div>;
    }
  };

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
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setOptionSelected(option)}
            style={{
              ...buttonStyle,
              backgroundColor:
                optionSelected === option || hoveredButton === option
                  ? primaryColor
                  : "#868CFF",
            }}
            onMouseOver={() => setHoveredButton(option)}
            onMouseOut={() => setHoveredButton(null)}
          >
            {option}
          </button>
        ))}
      </div>
      <div style={contentStyle}>{renderContent()}</div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "1rem 3rem",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  textTransform: "capitalize",
  fontSize: "1.5rem",
};

const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
};

const buttonStyle: React.CSSProperties = {
  padding: "1rem 2rem",
  borderRadius: "5px",
  border: "none",
  color: "white",
  textTransform: "capitalize",
  cursor: "pointer",
  fontWeight: "bold",
};

const contentStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "10px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
};

const contentTextStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
};

export default YoutubeButtons;
