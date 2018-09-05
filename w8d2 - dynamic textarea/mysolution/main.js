"use strict";
window.addEventListener("keydown", checkTextCount);
function checkTextCount() {
  const textarea = document.querySelector("textarea");
  let textCount = textarea.value.length; // use value instead of textContent
  console.log(textCount);
  if (textCount < 20) {
    textarea.style.fontSize = "37px";
  } else if (textCount < 30) {
    textarea.style.fontSize = "31px";
  } else if (textCount < 70) {
    textarea.style.fontSize = "23px";
  } else {
    textarea.style.fontSize = "17px";
  }
}
