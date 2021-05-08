const form = document.getElementById('tabForm')

form.addEventListener('submit', event => {
  event.preventDefault()
  chrome.tabs.query({ active: true, currentWindow: true })
    .then(tabs => {
      chrome.scripting.executeScript({ 
        target: { tabId: tabs[0].id },
        files: ['injectedScript.js']
      })
    })
    .catch(err => console.log(err))
})

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  const input = document.getElementById('tabName')
  if (input.value) {
    sendResponse({ title: input.value })
  }
  else return true
})
