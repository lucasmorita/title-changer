chrome.runtime.sendMessage({}, (response) => {
  document.title = response.title
});
