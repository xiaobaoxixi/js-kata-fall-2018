"use strict";
for (let i = 0; i < 200; i++) {
  let nr = Math.floor(Math.random() * 7);
  let currentCount = Number(
    document.querySelector(`p:nth-of-type(${nr + 1}) span:nth-of-type(2)`)
      .textContent
  );
  document.querySelector(
    `p:nth-of-type(${nr + 1}) span:nth-of-type(2)`
  ).textContent = currentCount + 1;
}
