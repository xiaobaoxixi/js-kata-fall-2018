"use strict";
let nr;
function update() {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then(data => data.json())
    .then(d => newNr(d));
  function newNr(n) {
    nr = Number(n.inQueue);
    let s = 0;
    changeSize();
    function changeSize() {
      if (s < 10) {
        document.querySelector(".nrInQueue").style.width = `${10 + nr * 1.5}vh`;
        document.querySelector(".nrInQueue").style.height = `${10 +
          nr * 1.5}vh`;
        document.querySelector(
          ".nrInQueue"
        ).style.margin = `calc(50vh - .5*${10 + nr * 1.5}vh) auto`;
      }
      s++;
      setTimeout(changeSize, 100);
    }
    console.log(`${nr} ${10 + nr * 1.5}`);
  }
  setTimeout(update, 10000);
}
update();
