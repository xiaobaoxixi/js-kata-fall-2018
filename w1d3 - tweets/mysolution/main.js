"use strict";
let template = document.querySelector("#tweetTemplate").content;
fetch("https://kea-alt-del.dk/twitter/api/")
  .then(e => e.json())
  .then(showTweets);
function showTweets(data) {
  let fetchedTweets = data.statuses;
  fetchedTweets.forEach(singleTweet);
  function singleTweet(t) {
    let clone = template.cloneNode(true);
    clone.querySelector("p").textContent = t.text;
    document.querySelector("#tweets-section").appendChild(clone);
  }
  console.log(fetchedTweets.length);
}
