import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";
// Task one

const BD = new Date("Nov 10 2002");
const currentDate = new Date();

let dateDiff = currentDate - BD;

console.log(dateDiff / 1000 + " Seconds");
console.log(dateDiff / 1000 / 60 + " Minutes");
console.log(dateDiff / 1000 / 60 / 60 + " Hours");
console.log(dateDiff / 1000 / 60 / 60 / 24 + " Days");
console.log(dateDiff / 1000 / 60 / 60 / 24 / 7 + " Weeks");
console.log(dateDiff / 1000 / 60 / 60 / 24 / 30 + " Months");
console.log(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12 + " Years");
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365 + " Years");

console.log("*".repeat(60));
// Task two

const tenYearsAfterStart = new Date();
tenYearsAfterStart.setFullYear(1980, 0, 1);
tenYearsAfterStart.setHours(0, 0, 1);
console.log(tenYearsAfterStart.toString());
// Automatically calls .toISOString() in nodejs.
console.log(tenYearsAfterStart); // The output using live-server Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)
console.log(tenYearsAfterStart.toLocaleDateString());

console.log("*".repeat(60));

// Task Three

const date3 = new Date();

date3.setFullYear(2025, 8, 30);
console.log(date3.toString());
// toLocaleString may take en-Us/en-GB and others or undefined to use client locale.
// month may be "numeric" | "2-digit" | "long" | "short" | "narrow"
// the object also takes year day and weekday
console.log(
  `Previous month is ${date3.toLocaleString("ar-EG", { month: "long" })}. And last day is ${date3.getDate()}`,
);
console.log("*".repeat(60));

// Task Four

const date4One = new Date("2000-01-01T22:00:00");
const date4OneTwo = new Date("2000-1-1");
const date4Two = new Date("1/1/2000");
const date4Three = new Date("2000 1 1");

console.log(date4One);
console.log(date4OneTwo);
console.log(date4Two);
console.log(date4Three);
console.log("*".repeat(60));

// Task Five
// We can use console.time or performance.now for best performance.
// console.time("Loop Time");
// const startPerformance = performance.now();
// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }
// const endPerformance = performance.now();
// const elapsedPerformance = endPerformance - startPerformance;
// console.log(`Loop took ${Math.trunc(elapsedPerformance)} Milliseconds.`);
// console.timeEnd("Loop Time");
// console.log("*".repeat(60));

// Task six

function* gen() {
  let current = 14;
  let diff = 140;

  while (true) {
    yield current;
    current += diff;
    diff += 200;
  }
}

// Test
let generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
console.log("*".repeat(60));

// Task seven

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}
function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}
let generator2 = genAll();
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log("*".repeat(60));

// Task eight

// My main.js is a24.js

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
