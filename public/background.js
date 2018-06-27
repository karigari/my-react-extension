const jsLocation = "static/js/bundle.js";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && jsLocation !== null) {
    chrome.tabs.executeScript(tabId, {
      file: jsLocation,
      runAt: "document_end"
    });
  }
});
