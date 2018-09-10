"use strict";
let digitIndex = 1;
let currentDigit = document.querySelector(
  `.phoneNumberDigit:nth-of-type(${digitIndex}) p`
);
let loopNumInterval;
window.addEventListener("load", init);
function init() {
  currentDigit.textContent = 0;
  loopNumInterval = setInterval(loopNum, 130);
}
function loopNum() {
  if (Number(currentDigit.textContent) + 1 > 9) {
    currentDigit.textContent = 0;
  } else {
    currentDigit.textContent = Number(currentDigit.textContent) + 1;
  }
}

const allDigits = document.querySelectorAll(".phoneNumberDigit");
// allDigits.forEach(catchClicked);
// function catchClicked(d) {
//   d.addEventListener("click", checkHasValue);
//   function checkHasValue(d) {
//     if (d.target.textContent.length > 0) {
//       setDigit();
//     }
//   }
// }
const setButton = document.querySelector(".set");
setButton.addEventListener("click", setDigit);

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

document.querySelector("button.reset").addEventListener("click", reset);
function reset() {
  digitIndex = 1;
  currentDigit = document.querySelector(
    `.phoneNumberDigit:nth-of-type(${digitIndex}) p`
  );
  allDigits.forEach(clearAllExistingDigit);
  function clearAllExistingDigit(d) {
    d.querySelector("p").textContent = "";
  }
  // because didn't clear interval with the reset function, so the fist digit will be generated right after this point.
}

/* 2 ******************************************************/
const pi = document.querySelector(".pi p").textContent.replace(/\s+/g, " "); //this includes whitespaces/newlines, need to be replaced with normal space, otherwise will give "break" of function
const backwardButton = document.querySelector(".backward");
const forwardButton = document.querySelector(".forward");
let originalHtml;
let newHtml;
let newP = "";
let index = 2;
let resumeIndex;
let forTimeout;
let backTimeout;

function makeBigger(i) {
  newP = pi.slice(0, i);
  for (let j = i; j < i + 10; j++) {
    newHtml = `<span class="bigger">${pi[j]}</span>`;
    newP += newHtml;
  }
  newP += pi.slice(i + 10);
  document.querySelector(".pi p").innerHTML = newP;
}
makeBigger(index);

backwardButton.addEventListener("mouseenter", backward);
backwardButton.addEventListener("mouseleave", function() {
  clearTimeout(backTimeout);
  originalHtml = document.querySelector(".pi p").innerHTML;
  index = Array.from(originalHtml).indexOf("<");
});
forwardButton.addEventListener("mouseenter", forward);

forwardButton.addEventListener("mouseleave", function() {
  clearTimeout(forTimeout);
  originalHtml = document.querySelector(".pi p").innerHTML;
  index = Array.from(originalHtml).indexOf("<");
});

function forward() {
  if (index < 1199) {
    index++;
    makeBigger(index);
    forTimeout = setTimeout(forward, 50);
  }
}
function backward() {
  if (index > 2) {
    index--;
    makeBigger(index);
    backTimeout = setTimeout(backward, 50);
  }
}
