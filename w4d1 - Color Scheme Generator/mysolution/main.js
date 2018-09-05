"use strict";

const divArray = document.querySelectorAll("div");
divArray.forEach(generateRGB);
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
