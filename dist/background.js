/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
// get current tab
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = tab.url;
    const title = tab.title;
    const favicon = tab.favIconUrl;
    // save data
    const data = {
        url,
        title,
        favicon,
    };
    chrome.storage.sync.set({ data }, () => {
        console.log("Data saved");
    });
    // send message to content script
    chrome.tabs.sendMessage(tab.id, { message: url });
});

/******/ })()
;
//# sourceMappingURL=background.js.map