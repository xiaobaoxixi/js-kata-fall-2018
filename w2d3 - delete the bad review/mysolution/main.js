"use strict";
const ratingsArray = document.querySelectorAll("ul li span");
window.addEventListener("load", ratingsArray.forEach(removeLowRating));
console.log(ratingsArray);

function removeLowRating(r) {
  if (r.textContent <= 5) {
    r.parentElement.remove();
  }
}
