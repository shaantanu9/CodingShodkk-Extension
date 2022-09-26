import React from "react";

const Logout = ({ deleteToken }) => {
  const handleLogout = () => {
    chrome.storage.sync.set({ token: null }, () => {
      deleteToken(null);
      console.log("saved");
    });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
