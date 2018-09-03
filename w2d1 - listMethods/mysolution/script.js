"use strict";
const liS = document.querySelectorAll("#info ul li");

/** 2 alternatives */
liS.forEach(displayElement);

// for (let i = 0; i < liS.length; i++) {
//   displayElement(liS[i]);
// }
function displayElement(element) {
  console.log(element.textContent);
}

function displayElementModify(e) {
  e.textContent = "/// " + e.textContent;
}
// listMethods("modify");
// listMethods("info");
// listMethods("newarray");

// TODO: Create listMethods function
