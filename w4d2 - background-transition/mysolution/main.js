"use strict";
let hsl;
let hslArray = [];
window.addEventListener("load", generateHSL);
function generateHSL() {
  let hue = Math.floor(Math.random() * 361);
  let s = Math.floor(Math.random() * 100) + "%";

  let l = Math.floor(Math.random() * 100) + "%";
  hsl = `hsl(${hue}, ${s}, ${l})`;
  if (hsl !== hslArray[hslArray.length - 1]) {
    document.querySelector("div").style.backgroundColor = hsl;
    hslArray.push(hsl);
    setTimeout(generateHSL, 2000);
  } else {
    generateHSL();
  }
}
