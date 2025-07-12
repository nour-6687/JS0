/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// using only slice and charAt
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH
// console.log(a[13].toUpperCase().repeat(8));

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,6)} ${a.substr(11)}`); // Elzero School
// console.log(a.substr(0,7) + a.substr(11));

// Solution Must Be Dynamic Because String May Changes
console.log(a[0].toLowerCase()+a.substring(1,a.length-1).toUpperCase()+a[a.length-1].toLowerCase()); // eLZERO WEB SCHOOl