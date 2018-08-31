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
window.addEventListener("load", slideIn);
function slideIn() {
  div.classList.add("slide-in");
}
yes.addEventListener("click", slideOut);
function slideOut() {
  div.classList.remove("slide-in");
}
no.addEventListener("click", insist);
function insist() {
  div.querySelector("p").textContent = "You have to agree!";
}
