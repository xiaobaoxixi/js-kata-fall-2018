"use strict";

let sixDigits = [];
window.addEventListener("load", getCurrentTime);
function getCurrentTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  splitDigit(hour);
  splitDigit(minute);
  splitDigit(second);
}

function splitDigit(x) {
  if (x < 10) {
    //    x = `0${x}`;
    sixDigits.push("0");
    sixDigits.push(x);
  } else {
    sixDigits.push(String(x)[0]);
    sixDigits.push(String(x)[1]);
  }
  loopThroughDigits(sixDigits);
}

function loopThroughDigits(sixDigits) {
  for (let i = 0; i < 6; i++) {
    showSingleDigitImg(sixDigits[i], i);
  }

  function showSingleDigitImg(x, i) {
    x = Number(x);
    if (x === 0)
      document.querySelector(`.digit${i}`).style.backgroundPosition = "0 0";
    if (x === 1)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "-100px 0px";
    if (x === 2)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "-200px 0";
    if (x === 3)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "-300px 0px";
    if (x === 4)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "-401px 0px";
    if (x === 5)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "0 -135px";
    if (x === 6)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "-100px -135px";
    if (x === 7)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "-200px -135px";
    if (x === 8)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "-300px -135px";
    if (x === 9)
      document.querySelector(`.digit${i}`).style.backgroundPosition =
        "-401px -135px";
  }
}
