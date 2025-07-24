// https://elzero.org/javascript-bootcamp-assignments-lesson-from-071-to-078/
// Task One
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let solution1 = mix
  .map((ele) => (typeof ele === "string" ? ele : ""))
  .reduce((acc, curr) => `${acc}${curr}`);

console.log(solution1);
// Elzero

// Task Two
let myString = "EElllzzzzzzzeroo";

let newString = myString
  .split("")
  .filter((el, index) => myString.indexOf(el) === index)
  .join("");
console.log(newString);
// Elzero

// Task Three
let myArray = ["E", ["l", "z", ["e", ["r"]], "o"]];
let solution3 = myArray
  .reduce((acc, curr) => acc.concat(curr))
  .split("")
  .map((el) => (el === "," ? "" : el))
  .join("");
console.log(solution3);
// Elzero

// Task Four
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let solution4 = numsAndStrings
  .filter((el) => typeof el === "number")
  .map((el) => -el);
console.log(solution4);
// [-1, -10, 10, 20, -5, -3]

// Task Five
let nums = [2, 12, 11, 5, 10, 1, 99];
let solution5 = nums.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc * curr : acc + curr),
  1
);
console.log(solution5);
// 500
