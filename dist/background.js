/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
// // get current tab
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   const tab = tabs[0];
//   const url = tab.url;
//   const title = tab.title;
//   const favicon = tab.favIconUrl;
//   // save data
//   const data = {
//     url,
//     title,
//     favicon,
//   };
//   chrome.storage.sync.set({ data }, () => {
//     console.log("Data saved");
//   });
//   // send message to content script
//   chrome.tabs.sendMessage(tab.id, { message: url });
// });
// chrome.commands.onCommand.addListener(function (e) {
//   if (e === "open_popup") {
//     chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
//       const isSpecialPage =
//         tab.url === "chrome://newtab/" ||
//         tab.url === "chrome-search://local-ntp/local-ntp.html";
//       if (isSpecialPage) {
//         chrome.tabs.remove(tab.id, () => {
//           chrome.tabs.create({ url: "popup.html" });
//         });
//       } else {
//         chrome.scripting.executeScript({
//           target: { tabId: tab.id },
//           files: ["popup.js"],
//         });
//       }
//     });
//   }
// });
// chrome.runtime.onInstalled.addListener(() => {
//   console.log("Extension installed");
// });
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "getPageContent") {
//     chrome.scripting.executeScript(
//       {
//         target: { tabId: message.tabId },
//         func: () => {
//           return {
//             body: document.body.innerText,
//             title: document.title,
//           };
//         },
//       },
//       (results) => {
//         sendResponse(results[0].result);
//       }
//     );
//     return true; // Will respond asynchronously.
//   }
// });
// // new
// // Create context menu
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: "saveBookmark",
//     title: "Save Bookmark",
//     contexts: ["page", "selection", "link"]
//   });
//   chrome.contextMenus.create({
//     id: "summarizePage",
//     title: "Summarize Page",
//     contexts: ["page"]
//   });
//   chrome.contextMenus.create({
//     id: "addJournalEntry",
//     title: "Add Journal Entry",
//     contexts: ["page", "selection"]
//   });
// });
// // Handle context menu actions
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === "saveBookmark") {
//     saveBookmark(tab.url, tab.title);
//   } else if (info.menuItemId === "summarizePage") {
//     summarizePage(tab.url);
//   } else if (info.menuItemId === "addJournalEntry") {
//     addJournalEntry(info.selectionText);
//   }
// });
// // function saveBookmark(url, title) {
// //   // Save the bookmark logic
// //   console.log("Saving bookmark:", url, title);
// //   // Implement your saving logic here
// // }
// function summarizePage(url) {
//   // Summarize the page logic
//   console.log("Summarizing page:", url);
//   // Implement your summarization logic here
// }
// function addJournalEntry(selectionText) {
//   // Add journal entry logic
//   console.log("Adding journal entry:", selectionText);
//   // Implement your journal entry logic here
// }
// function saveBookmark(url, title) {
//   const data = { url, title };
//   chrome.storage.sync.set({ data }, () => {
//     console.log("Data saved");
//     // Send message to popup
//     // chrome.runtime.sendMessage({ action: "bookmarkSaved", data: data });
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       console.log(tabs)
//       const tabId = tabs[0]?.id;
//       chrome.scripting.executeScript({
//         target: { tabId: tabId },
//         files: ['content.js']
//       }, () => {
//         chrome.tabs.sendMessage(tabId, { action: "bookmarkSaved", data: data });
//       });
//     });
//   });
// }
function saveBookmark(url, title, tab, text, link) {
    const data = { url, title, favicon: tab.favIconUrl, text, link };
    console.log({
        data,
        tab,
        url,
        text,
    });
    // chrome.storage.sync.set({ data }, () => {
    //   console.log("Data saved");
    //   // saveBookmarkCallApi(data).then(() => {
    //   //   console.log("Bookmark saved successfully!");
    //   // }
    //   // );
    //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //     const tabId = tab.id;
    //     // Use chrome.scripting.executeScript
    //     chrome.scripting.executeScript(
    //       {
    //         target: { tabId: tabId },
    //         files: ["contentScript.js"],
    //       },
    //       () => {
    //         if (chrome.runtime.lastError) {
    //           console.error(chrome.runtime.lastError.message);
    //         } else {
    //           console.log("186");
    //           console.log("186");
    //           console.log("186");
    //           // saveBookmarkCallApi(data).then(() => {
    //           //   console.log("Bookmark saved successfully!");
    //           // }
    //           // );
    //           chrome.tabs.sendMessage(
    //             tabId,
    //             { action: "bookmarkSaved", data: data },
    //             (response) => {
    //               if (chrome.runtime.lastError) {
    //                 console.error(chrome.runtime.lastError.message);
    //               } else {
    //                 console.log("194");
    //                 console.log("194");
    //                 console.log("194");
    //                 console.log("194");
    //                 console.log("Message sent successfully");
    //               }
    //             }
    //           );
    //         }
    //       }
    //     );
    //   });
    // });
    chrome.storage.sync.set({ data }, () => {
        console.log("Data saved");
        chrome.storage.local.get(['contentScriptInjected'], (result) => {
            if (!result.contentScriptInjected) {
                // Inject content script if not already injected
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ["contentScript.js"],
                }, () => {
                    if (chrome.runtime.lastError) {
                        console.error(chrome.runtime.lastError.message);
                    }
                    else {
                        // Set flag in storage
                        chrome.storage.local.set({ contentScriptInjected: true }, () => {
                            console.log("Content script injected and flag set.");
                            sendMessageToContentScript(tab.id, data);
                        });
                    }
                });
            }
            else {
                // If already injected, just send the message
                console.log("Content script already injected.");
                sendMessageToContentScript(tab.id, data);
            }
        });
    });
}
function sendMessageToContentScript(tabId, data) {
    chrome.tabs.sendMessage(tabId, { action: "bookmarkSaved", data: data }, (response) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
        else {
            console.log("Message sent successfully");
        }
    });
}
// Existing code...
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    chrome.contextMenus.create({
        id: "saveBookmark",
        title: "Save Bookmark",
        contexts: ["page", "selection", "link", "all"],
    });
    chrome.contextMenus.create({
        id: "summarizePage",
        title: "Summarize Page",
        contexts: ["page", "selection", "link", "all"],
    });
    chrome.contextMenus.create({
        id: "addJournalEntry",
        title: "Add Journal Entry",
        contexts: ["all", "page", "selection", "link"],
    });
    chrome.contextMenus.create({
        id: "summarizePage",
        title: "Summarize Page",
        contexts: ["page", "selection", "link", "all"],
    });
});
// Handle context menu actions
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "saveBookmark") {
        if (tab) {
            // saveBookmark(tab.url, tab.title, tab);
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => window.getSelection().toString(),
            }, (results) => {
                const selectedText = results[0].result;
                saveBookmark(tab.url, tab.title, tab, selectedText, info.linkUrl);
            });
        }
        else {
            console.error("Tab is undefined");
        }
    }
    else if (info.menuItemId === "summarizePage") {
        if (tab) {
            summarizePage(tab.url);
        }
        else {
            console.error("Tab is undefined");
        }
    }
    else if (info.menuItemId === "addJournalEntry") {
        if (info.selectionText) {
            addJournalEntry(info.selectionText);
        }
        else {
            console.error("No selection text");
        }
    }
    else if (info.menuItemId === "summarizePage") {
        if (tab) {
            summarizePage(tab.url);
        }
        else {
            console.error("Tab is undefined");
        }
    }
});
// Existing functions...
function summarizePage(url) {
    const content = document.body.innerText;
    // Summarize the page logic
    console.log("Summarizing page:", { url, content });
    // Implement your summarization logic here
}
function addJournalEntry(selectionText) {
    // Add journal entry logic
    console.log("Adding journal entry:", selectionText);
    // Implement your journal entry logic here
}

// function saveBookmarkCallApi(data) {
//   console.log("Inside saveBookmarkCallApi", data);
//   try {
//     // const res = _bookmarkAccountService.createBookmark({
//     //   title: data.title,
//     //   url: data.url,
//     //   text: data.text,
//     // });
//     let res ={}
//     //  res = axios.post("http://localhost:3000/api/bookmarks", data);
//     // https://fakestoreapi.com/products
//     // res = axios.get("https://fakestoreapi.com/products")
//     console.log("Response from saveBookmarkCallApi", res);
//     return res;
//   } catch (error) {
//     console.error("Error in saveBookmarkCallApi:", error);
//   }
// }

/******/ })()
;
//# sourceMappingURL=background.js.map