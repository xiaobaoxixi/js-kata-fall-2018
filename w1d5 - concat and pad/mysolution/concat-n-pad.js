"use strict";
function concatNPad(fileName, num) {
  if (num < 10) {
    num = "0" + num;
  }
  let replaceAtThisIndex = String(fileName).indexOf("#");
  let finalFileName =
    String(fileName).substring(0, replaceAtThisIndex) +
    num +
    String(fileName).substring(replaceAtThisIndex + 1);
  console.log(finalFileName);
}
concatNPad("image#_small.png", 12);
