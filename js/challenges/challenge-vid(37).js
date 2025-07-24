/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Task 2
let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}
// ? OR
if (st.indexOf("e") + "" + st.indexOf("r") === "34") {
  console.log("Good");
}
//!!!!!!!!!!!!!!!!
// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substring(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
