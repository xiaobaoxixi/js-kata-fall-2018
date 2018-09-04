"use strict";
/** basic kata */
let foundIndex = [];
function findAll(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      foundIndex.push(i);
    }
  }
  console.log(foundIndex);
}
findAll(
  ["dog", "cat", "horse", "cat", "mouse", "dog", "cat", "cat", "dog"],
  "cat"
);
