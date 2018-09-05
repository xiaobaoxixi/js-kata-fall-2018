"use strict";
let num = [];
document.querySelectorAll("span").forEach(s => num.push(Number(s.textContent)));

let plusButton = document.querySelector(".plus");
plusButton.addEventListener("click", plusOne);

function plusOne() {
  if (num[7] === 9) {
    num[7] = 0;
    num[6] = num[6] + 1;
    num.splice(6, 2, num[6], num[7]);
    checkMoreThanTen();
  } else {
    num[7] = num[7] + 1;
  }
  num.splice(7, 1, num[7]);
  assignNumToSpan();
}

function checkMoreThanTen() {
  for (let i = 7; i >= 0; i--) {
    if (num[i] > 9) {
      num[i] = 0;
      num[i - 1] = num[i - 1] + 1;
    }
  }
}

function assignNumToSpan() {
  for (let i = 1; i < 9; i++) {
    document.querySelector(`.num:nth-of-type(${i})`).textContent = num[i - 1];
  }
}
