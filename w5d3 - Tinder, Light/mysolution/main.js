"use strict";

const img = document.querySelector("img");
const match = document.querySelector(".match");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
let timeOut;

window.addEventListener("DOMContentLoaded", init);
function init() {
  const maleButton = document.querySelector("button.male");
  const femaleButton = document.querySelector("button.female");
  maleButton.addEventListener("click", getMales);
  femaleButton.addEventListener("click", getFemales);
}
function getMales() {
  clearTimeout(timeOut); // useful when switch to another gender after a match is found and therefore a
  match.style.display = "none";
  fetch("males.json")
    .then(data => data.json())
    .then(male => showPerson(male));
}
function getFemales() {
  clearTimeout(timeOut);
  match.style.display = "none";
  fetch("females.json")
    .then(data => data.json())
    .then(female => showPerson(female));
}

function showPerson(person) {
  let currentIndex = Number(img.getAttribute("data-index"));
  img.setAttribute("src", person.results[currentIndex].picture.large);
  no.addEventListener("click", showNextPerson);
  yes.addEventListener("click", checkIfMatch);
  function showNextPerson() {
    no.addEventListener("click", showNextPerson);
    yes.addEventListener("click", checkIfMatch);
    match.style.display = "none";
    currentIndex < person.results.length - 1
      ? currentIndex++
      : (currentIndex = 0);
    img.setAttribute("data-index", currentIndex);
    img.setAttribute("src", person.results[currentIndex].picture.large);
  }
  function checkIfMatch() {
    let currentIndex = Number(img.getAttribute("data-index"));
    if (person.results[currentIndex].inToYou === true) {
      no.removeEventListener("click", showNextPerson);
      yes.removeEventListener("click", checkIfMatch);
      match.style.display = "inherit";
      img.setAttribute("src", person.results[currentIndex].picture.large);
      timeOut = setTimeout(showNextPerson, 1500);
    } else {
      clearTimeout(timeOut);
      showNextPerson();
    }
  }
}
