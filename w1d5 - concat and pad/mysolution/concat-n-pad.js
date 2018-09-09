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
concatNPad("myfile_backup.#", 2018);

// optional 1 only change last one
function concatNPad2(fileName, num) {
  let array = Array.from(fileName);
  array = array.map(function(letter, index) {
    if (index === fileName.lastIndexOf("#")) {
      return num;
    } else if (letter === "#") {
      return 0;
    } else {
      return letter;
    }
  });
  console.log(array.join(""));
}
concatNPad2("image###.png", 3);

// optional 2 replace all
function optionalConcatNPad(fileName, num) {
  let array = Array.from(fileName);
  let newArray = array.map(letter => {
    if (letter === "#") {
      return num;
    } else {
      return letter;
    }
  });
  console.log(newArray.join(""));
}
optionalConcatNPad("image###.png", 31);
