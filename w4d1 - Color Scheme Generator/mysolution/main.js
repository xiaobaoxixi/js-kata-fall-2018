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
/** optional: same hue */
document.querySelector(".hue").addEventListener("click", generateSameHue);
function generateSameHue() {
  let hslColors = [];
  let hue = Math.floor(Math.random() * 361);
  hslColors.push(hue);
  divHSLArray.forEach(assignSameHue);
  function assignSameHue(d) {
    hslColors[1] = `${Math.floor(Math.random() * 101)}%`;
    hslColors[2] = `${Math.floor(Math.random() * 101)}%`;
    d.textContent = `hsl(${hslColors})`;
    d.style.backgroundColor = `hsl(${hslColors})`;
  }
}
/** optional: same saturation */
document
  .querySelector(".saturation")
  .addEventListener("click", generateSameSaturation);
function generateSameSaturation() {
  let hslColors = [];
  let saturation = Math.floor(Math.random() * 101);
  divHSLArray.forEach(assignSameHue);
  function assignSameHue(d) {
    hslColors[0] = `${Math.floor(Math.random() * 361)}`;
    hslColors[1] = `${saturation}%`;
    hslColors[2] = `${Math.floor(Math.random() * 101)}%`;
    d.textContent = `hsl(${hslColors})`;
    d.style.backgroundColor = `hsl(${hslColors})`;
  }
}

/** optional: same lightness */
document
  .querySelector(".lightness")
  .addEventListener("click", generateSameLightness);
function generateSameLightness() {
  let hslColors = [];
  let lightness = Math.floor(Math.random() * 101);
  divHSLArray.forEach(assignSameHue);
  function assignSameHue(d) {
    hslColors[0] = `${Math.floor(Math.random() * 361)}`;
    hslColors[1] = `${Math.floor(Math.random() * 101)}%`;
    hslColors[2] = `${lightness}%`;
    d.textContent = `hsl(${hslColors})`;
    d.style.backgroundColor = `hsl(${hslColors})`;
  }
}
