/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split(",")
//   .filter(function (ele) {
//     return isNaN(ele) ;
//   })
//   .map(function (ele) {
//     return ele === "_" ? " " : ele;
//   })
//   .slice(0,-1)
//   .join("");

// console.log(solution); // Elzero Web School

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter((ele) => isNaN(Number(ele)))
  .map((ele) => (ele === "_" ? " " : ele))
  .reduce((acc, current) => `${acc}${current}`);
