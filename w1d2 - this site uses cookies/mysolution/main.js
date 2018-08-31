/*
Create a small site that does the following.

1.  when the page loads, an element (div?) slides up/in containing the cookie notification
2.  When a button is pressed, it slides back out

You do not need to implement cookies (and cookies are horrible to work with in JS).

### Optional

If you feel like doing a bit more, take a look at a newer alternative to cookies called [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) that's way easier to work with
*/
"use strict";
const div = document.querySelector("div");
const yes = document.querySelector("button:first-of-type");
const no = document.querySelector("button:nth-of-type(2)");
window.addEventListener("load", checkIfAlreadyAgreed);
function checkIfAlreadyAgreed() {
  if (!window.localStorage.getItem("agreed")) {
    console.log("not yet agreed");
    slideIn();
  } else {
    alert("already agreed. Restart live-server to see notification of cookies");
  }
}
function slideIn() {
  div.classList.add("slide-in");
}
yes.addEventListener("click", slideOut);
function slideOut() {
  div.classList.remove("slide-in");
  setLocalStorage();
}
no.addEventListener("click", insist);
function insist() {
  div.querySelector("p").textContent = "You have to agree!";
}
// optional
function setLocalStorage() {
  window.localStorage.setItem("agreed", "yes");
}
