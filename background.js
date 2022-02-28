// thanks to https://github.com/luke3359767/nhentaiHelper

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "sixDigitNumber_normal",
      title: "Search on Nhentai (Private browsing)",
      contexts: ["selection"],
    });
    chrome.contextMenus.create({
      id: "sixDigitNumber_private",
      title: "Search on Nhentai (Normal browsing)",
      contexts: ["selection"],
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function getword(info, tab) {
    if (info.menuItemId !== "sixDigitNumber_normal") {
      return;
    }
    console.log("Number " + info.selectionText + " was clicked.");
    chrome.windows.create({
      url: "https://nhentai.net/search/?q=" + info.selectionText,
      incognito: true,
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function getword(info, tab) {
    if (info.menuItemId !== "sixDigitNumber_private") {
      return;
    }
    console.log("Number " + info.selectionText + " was clicked.");
    chrome.tabs.create({
      url: "https://nhentai.net/search/?q=" + info.selectionText,
    });
  });