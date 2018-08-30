"use strict";
let template = document.querySelector("#tweetTemplate").content;
fetch("https://kea-alt-del.dk/twitter/api/")
  .then(e => e.json())
  .then(showTweets);
function showTweets(data) {
  let fetchedTweets = data.statuses;
  let hashtagsArray = [];
  fetchedTweets.forEach(singleTweet);
  function singleTweet(t) {
    let clone = template.cloneNode(true);
    clone.querySelector("p").textContent = t.text;
    if (t.entities.hashtags.length > 0) {
      let allHashtags = t.entities.hashtags;
      allHashtags.forEach(getHashtag);
      function getHashtag(h) {
        if (hashtagsArray.indexOf(h.text) < 0) {
          hashtagsArray.push(h.text); // remove duplicates
        }
      }
    }
    document.querySelector("#tweets-section").appendChild(clone);
  }
  hashtagsArray.forEach(collectHashtag);
  function collectHashtag(h) {
    let hashtagSpan = document.createElement("span");
    hashtagSpan.textContent = `#${h} `;
    document.querySelector("#hashtags").appendChild(hashtagSpan);
  }
}
