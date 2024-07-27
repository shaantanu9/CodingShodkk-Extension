// deferIframe.js
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const iframe = document.createElement("iframe");
    iframe.src = "http://localhost:3000/admin/home";
    // iframe.src = "http://deesecondbrain.soobati.com/";
    iframe.frameBorder = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    const iframeContainer = document.getElementById("iframeContainer");
    iframeContainer.innerHTML = ""; // Clear any loading text
    iframeContainer.appendChild(iframe);
  }, 2000); // 5000 milliseconds = 5 seconds
});
