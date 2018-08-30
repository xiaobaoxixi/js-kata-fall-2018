"use strict";
const detailButtons = document.querySelectorAll("a");
const modal = document.querySelector("#modal_container");

detailButtons.forEach(detailButtonClicked);
function detailButtonClicked(b) {
  b.addEventListener("click", showModal);
}
function showModal() {
  console.log("Show modal");
  modal.style.display = "inherit";
}
const closeX = document.querySelector("#modal_container span");
closeX.addEventListener("click", hideModal);

function hideModal() {
  console.log("Hide modal");
  modal.style.display = "none";
}
