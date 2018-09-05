"use strict";

const divRGBArray = document.querySelectorAll(".rgb");
const divHSLArray = document.querySelectorAll(".hsl");
let rgbColors = [];
let rgbCodes;
let rgb;

divRGBArray.forEach(generateRGB);
divHSLArray.forEach(generateHSL);

function generateRGB(d) {
  rgbCodes = [];
  for (let i = 0; i < 3; i++) {
    rgb = Math.floor(Math.random() * 256);
    rgbCodes.push(rgb);
  }
  /** optional 1: no duplicated colors */
  if (rgbColors.indexOf(rgbCodes) < 0) {
    rgbColors.push(rgbCodes);
    d.textContent = `rgb(${rgbCodes})`;
    d.style.backgroundColor = `rgb( ${rgbCodes})`;
  } else {
    generateRGB();
  }
}

function generateHSL(d) {
  let hslColors = [];
  hslColors.push(Math.floor(Math.random() * 361));
  hslColors.push(`${Math.floor(Math.random() * 101)}%`);
  hslColors.push(`${Math.floor(Math.random() * 101)}%`);
  d.textContent = `hsl(${hslColors})`;
  d.style.backgroundColor = `hsl(${hslColors})`;
}
