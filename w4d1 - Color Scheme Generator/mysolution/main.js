"use strict";

const divRGBArray = document.querySelectorAll(".rgb");
const divHSLArray = document.querySelectorAll(".hsl");

divRGBArray.forEach(generateRGB);
divHSLArray.forEach(generateHSL);
function generateRGB(d) {
  let rgbColors = [];
  let rgb;
  for (let i = 0; i < 3; i++) {
    rgb = Math.floor(Math.random() * 256);
    rgbColors.push(rgb);
  }
  d.textContent = `rgb(${rgbColors})`;
  d.style.backgroundColor = `rgb( ${rgbColors})`;
}
function generateHSL(d) {
  let hslColors = [];
  hslColors.push(Math.floor(Math.random() * 361));
  hslColors.push(`${Math.floor(Math.random() * 101)}%`);
  hslColors.push(`${Math.floor(Math.random() * 101)}%`);
  d.textContent = `hsl(${hslColors})`;
  d.style.backgroundColor = `hsl(${hslColors})`;
}
