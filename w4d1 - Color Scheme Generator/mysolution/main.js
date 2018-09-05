"use strict";

const divRGBArray = document.querySelectorAll("div.rgb");
const divHSLArray = document.querySelectorAll("div.hsl");
let rgbColors = [];
let hslColors = [];
let rgbCodes;
let rgb;
let randomHSL = true;
let sameHue = false;
let sameSaturation = false;
let sameLightness = false;

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
    if (d) d.textContent = `rgb(${rgbCodes})`;
    if (d) d.style.backgroundColor = `rgb( ${rgbCodes})`;
  } else {
    generateRGB();
  }
}

function generateHSL(d) {
  let hslCodes = [];
  hslCodes.push(Math.floor(Math.random() * 361));
  hslCodes.push(`${Math.floor(Math.random() * 101)}%`);
  hslCodes.push(`${Math.floor(Math.random() * 101)}%`);
  hslColors.push(hslCodes);
  if (d) d.textContent = `hsl(${hslCodes})`;
  if (d) d.style.backgroundColor = `hsl(${hslCodes})`;
}
/** optional: same hue */
document.querySelector(".hue").addEventListener("click", generateSameHue);
function generateSameHue() {
  randomHSL = false;
  sameHue = true;
  let hslCodes = [];
  let hue = Math.floor(Math.random() * 361);
  hslCodes.push(hue);
  divHSLArray.forEach(assignSameHue);
  function assignSameHue(d) {
    hslCodes[1] = `${Math.floor(Math.random() * 101)}%`;
    hslCodes[2] = `${Math.floor(Math.random() * 101)}%`;
    d.textContent = `hsl(${hslCodes})`;
    d.style.backgroundColor = `hsl(${hslCodes})`;
  }
}
/** optional: same saturation */
document
  .querySelector(".saturation")
  .addEventListener("click", generateSameSaturation);
function generateSameSaturation() {
  randomHSL = false;
  sameSaturation = true;
  let hslCodes = [];
  let saturation = Math.floor(Math.random() * 101);
  divHSLArray.forEach(assignSameHue);
  function assignSameHue(d) {
    hslCodes[0] = `${Math.floor(Math.random() * 361)}`;
    hslCodes[1] = `${saturation}%`;
    hslCodes[2] = `${Math.floor(Math.random() * 101)}%`;
    d.textContent = `hsl(${hslCodes})`;
    d.style.backgroundColor = `hsl(${hslCodes})`;
  }
}

/** optional: same lightness */
document
  .querySelector(".lightness")
  .addEventListener("click", generateSameLightness);
function generateSameLightness() {
  randomHSL = false;
  sameLightness = true;
  let hslCodes = [];
  let lightness = Math.floor(Math.random() * 101);
  divHSLArray.forEach(assignSameHue);
  function assignSameHue(d) {
    hslCodes[0] = `${Math.floor(Math.random() * 361)}`;
    hslCodes[1] = `${Math.floor(Math.random() * 101)}%`;
    hslCodes[2] = `${lightness}%`;
    d.textContent = `hsl(${hslCodes})`;
    d.style.backgroundColor = `hsl(${hslCodes})`;
  }
}

/** optional: remove color stripe when clicked*/
let allDivs = document.querySelectorAll("div[class]");
allDivs.forEach(removeDiv);
function removeDiv(d) {
  d.addEventListener("click", function(d) {
    d.target.remove();
  });
}

/** optional: add rgb color stripe */
document.querySelector(".addRGB").addEventListener("click", addRGB);
function addRGB() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("rgb");
  generateRGB();
  newDiv.style.backgroundColor = `rgb(${rgbColors[rgbColors.length - 1]})`;
  newDiv.textContent = `rgb(${rgbColors[rgbColors.length - 1]})`;
  document.querySelector("section.rgb").appendChild(newDiv);
}

/** optional add hsl color stripe */
document.querySelector(".addHSL").addEventListener("click", addHSL);
function addHSL() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("hsl");
  if (randomHSL) {
    generateHSL();
    newDiv.style.backgroundColor = `hsl(${hslColors[hslColors.length - 1]})`;
    newDiv.textContent = `hsl(${hslColors[hslColors.length - 1]})`;
    document.querySelector("section.hsl").appendChild(newDiv);
  } else if (sameHue) {
    let currentHSLValues = document
      .querySelector("div.hsl")
      .textContent.split(",");
    let hue = currentHSLValues[0].slice(currentHSLValues[0].indexOf("(") + 1);
    let hslCodes = [];
    hslCodes.push(hue);
    hslCodes[1] = `${Math.floor(Math.random() * 101)}%`;
    hslCodes[2] = `${Math.floor(Math.random() * 101)}%`;
    newDiv.textContent = `hsl(${hslCodes})`;
    newDiv.style.backgroundColor = `hsl(${hslCodes})`;
    document.querySelector("section.hsl").appendChild(newDiv);
  }
}

/** refresh all with button */
