//!!! WEEK7
//! vid48

/*
  Loop
  - For
  for ([1] [2] [3]) {
    /// Block Of Code
  }
*/
let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

//! vid49
/*
  Loop
  - Loop On Sequences
*/
let names_numbers = ["nour", 1, 1, "mamdouh", 2, 3, "elsayed", 65, "ibrahim"];
let namesOnly = [];
console.log(names_numbers);

for (m = 0; m < names_numbers.length; m++) {
  if (typeof names_numbers[m] === "string") {
    namesOnly.push(names_numbers[m]);
  }
}

console.log(namesOnly);

//! vid50
/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i0 = 0; i0 < products.length; i0++) {
  console.log("#".repeat(15));
  console.log(products[i0]);
  console.log("#".repeat(15));
  console.log("* Colours:");
  for (let q = 0; q < colors.length; q++) {
    console.log(`-  ${colors[q]}`);
  }
  console.log("* Models:");
  for (let w = 0; w < models.length; w++) {
    console.log(`-  ${models[w]}`);
  }
}
//! vid51

/*
Loop Control
- Break
- Continue
  - Label
  */
let products1 = [
  "Keyboard",
  1,
  2,
  2,
  3,
  5,
  "Mouse",
  "Pen",
  "Pad",
  6,
  6,
  84,
  "Monitor",
];

for (i = 0; i < products1.length; i++) {
  console.log(products1[i]);
  if (products1[i] === "Pen") {
    break;
  }
  console.log(products1[i]);
}
for (i = 0; i < products1.length; i++) {
  console.log(products1[i]);
  if (typeof products1[i] === "number") {
    continue;
  }
  console.log(products1[i]);
}

mainLoop: for (let i0 = 0; i0 < products.length; i0++) {
  console.log("#".repeat(15));
  console.log(products[i0]);
  console.log("#".repeat(15));
  console.log("* Colours:");
  nestedLoop: for (let q = 0; q < colors.length; q++) {
    if (colors[q] === "Green") {
      break mainLoop;
    }
    console.log(`-  ${colors[q]}`);
  }
}

//! vid52
/*
  Loop For Advanced Example
*/

let products2 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i3 = 0;

for (;;) {
  console.log(products2[i3]);
  i3 += 2;

  if (i3 === products2.length) break;
}

//! vid53
/*
  Products Practice
*/
let products5 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors5 = ["Red", "Green", "Blue"];
let showCount = 4;

document.writeln(`<h1>Show ${showCount} Products</h1>`);

for (let i5 = 0; i5 < showCount; i5++) {
  document.writeln(`<div>`);
  document.writeln(`<h4>[${i5 + 1}] ${products5[i5]}</h4>`);
  for (let j5 = 0; j5 < colors5.length; j5++) {
    ``;
    document.writeln(`<h5>(${j5 + 1}) ${colors5[j5]}</h5>`);
  }
  document.writeln(`<h5>${colors5.join(" | ")}</h5>`);
  document.writeln(`</div>`);
}

//! vid54
/*
  Loop
  - While
*/
index1 = 0;
while (index1 < colors5.length) {
  console.log(colors5[index1]);
  index1 += 1;
}

//! vid55
/*
  Loop
  - Do / While
*/

let product6 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i6 = 0;

do {
  console.log(i6);
  i6++;
} while (false);

console.log(i6);

//! vid56
//! challenge

//!!! WEEK8
//! vid57
/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

function sayHello(userName) {
  console.log(`Hi ${userName}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");

//! vid58

function sayHello2(userName, age) {
  if (age < 18) {
    console.log("Can't log in because age limit");
  } else {
    console.log(`Hello, ${userName}.Your age is ${age}`);
  }
}
sayHello2("NOor", 15);

function yearInterval(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    } else {
      console.log(i);
    }
  }
}
yearInterval(2002, 2025, 2020);

//! vid59
/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `interrupting`;
    }
    console.log(i);
  }
}
generate(20, 10);
/*
* If we used "break;" instead of "return interrupting;" break will:
Only exits the loop, not the function
The function would continue executing any code after the loop
Since there's no explicit return statement, the function returns undefined
You'd still get the same console output (10, 11, 12, 13, 14)

In this specific case, since there's no code after the loop, both would produce the same console output. But the key difference is the return value:

With return: the function returns "interrupting"
With break: the function returns undefined

The choice depends on whether you need the function to return a specific value when it hits that condition.
*/

//! vid60
/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello3(userName = "Unknown", age = "Unknown") {
  // Old ways without using ES6 default parameters
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello, ${userName}. Your age is ${age}.`;
}
console.log(sayHello3());

//! vid61

/*
  Function
  - Rest Parameters (It makes an array of parameters)
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
  result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final result is ${result}`;
}
console.log(calc(5, 5, 95));

//! vid62
/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function getInfo(
  userName = "Unknown",
  age = "Unknown",
  hRate = 0,
  show = "yes",
  ...skills
) {
  document.writeln(`<div>`);
  document.writeln(`<h1>Welcome, ${userName}</h1>`);
  document.writeln(`<p>Your age is ${age}</p>`);
  document.writeln(`<p>Your hour rate is $${hRate}</p>`);
  if (show === "yes") {
    if (skills.length > 0) {
      document.writeln(`<p>Skills Are: ${skills.join(" | ")}</p>`);
    } else {
      document.writeln(`<p>No skills yet.</p>`);
    }
  } else {
    document.writeln(`<p>skills Are hidden.</p>`);
  }

  document.writeln(`</div>`);
}

getInfo("NoOr", 23, 20, "no", "html", "css", "javascript");
getInfo(30, "yes", "nooooor", 50);

//! vid63 challenge

//!!! WEEK9
//! vid64
/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

// document.getElementById("show").onclick = sayHello;

setTimeout(function elzero() {
  console.log("Good");
}, 2000);

//! vid65
/*
  Function
  - Function Inside Function
  - Return Function
*/
function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

//! vid66
/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function () {
//   return 10;
// };
// let print = () => 10;

// let print = function (num) {
//   return num;
// };
// let print = num => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// };
//* if i have more than return function i should put the {} after the arrow the word 'return' itself.
let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

let hi = (firstN, lastN) => `hi, ${firstN} ${lastN}`;
console.log(hi("NoOr", "Mamdouh"));

//! vid67
/*
  Scope
  - Global And Local Scope
*/
var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

//! vid68
/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50; // if we switched let with var when calling from global it will be called and override the outer var.
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);

//! vid69
/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    console.log(`From Child ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();

function formatName(fullName) {
  const [firstName, lastName] = fullName.split(" ");
  return `${firstName} ${lastName[0]}`;
}

// Usage
console.log(formatName("Jane Doe"));

//! vid70 challenge
