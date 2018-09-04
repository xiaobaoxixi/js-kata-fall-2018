"use strict";
/** basic kata */
let arr = ["dog", "cat", "horse", "cat", "mouse", "dog", "cat", "cat", "dog"];
let foundIndex = [];
function findAll(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      foundIndex.push(i);
    }
  }
  console.log(foundIndex);
}
findAll(arr, "cat");

/** optional kata */
let foundIndex2 = arr.map(function(item, index) {
  if (item === "cat") {
    return index;
  }
});
let foundIndex2ClearedUp = foundIndex2.filter(item => item > -1); //clear out the falses in the []
console.log(foundIndex2ClearedUp);
