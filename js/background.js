alert("test!");

// background.js
function showAlert() {
  alert("test!");
}

chrome.scripting.executeScript({
  function: showAlert
});