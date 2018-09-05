"use strict";
let digitIndex = 1;
let currentDigit = document.querySelector(
  `.phoneNumberDigit:nth-of-type(${digitIndex}) p`
);
let loopNumInterval;
window.addEventListener("load", init);
function init() {
  currentDigit.textContent = 0;
  loopNumInterval = setInterval(loopNum, 200);
}
function loopNum() {
  if (Number(currentDigit.textContent) + 1 > 9) {
    currentDigit.textContent = 0;
  } else {
    currentDigit.textContent = Number(currentDigit.textContent) + 1;
  }
}

const allDigits = document.querySelectorAll(".phoneNumberDigit");
allDigits.forEach(catchClicked);
function catchClicked(d) {
  d.addEventListener("click", checkHasValue);
  function checkHasValue(d) {
    if (d.target.textContent.length > 0) {
      setDigit();
    }
  }
}

function setDigit() {
  let setValue = currentDigit.textContent;
  clearInterval(loopNumInterval);
  if (digitIndex < 8) {
    digitIndex++;
    currentDigit = document.querySelector(
      `.phoneNumberDigit:nth-of-type(${digitIndex}) p`
    );
    init();
  }
}
