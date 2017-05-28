// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'turnon.js'
  });
}

document.getElementById('clickme').addEventListener('click', hello);
