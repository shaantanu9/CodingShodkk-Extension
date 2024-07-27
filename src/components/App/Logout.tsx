import React from "react";

const Logout = ({ deleteToken }) => {
  const handleLogout = () => {
    chrome.storage.sync.set({ token: null }, () => {
      deleteToken(null);
      console.log("saved");
    });
  };
  const primaryColor = "#4456FF";

  return (
    <div>
      <button
        style={{
          borderRadius: "12px",
          backgroundColor: "white",
          padding: "10px 20px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "500",
          color: primaryColor,
          transition: "background-color 200ms",
          border: "1px solid #d1d5db",
          cursor: "pointer",
          // fontWeight: "bold",
        }}
        onClick={handleLogout}
      >
        <strong>Logout</strong>
      </button>
    </div>
  );
};

export default Logout;
