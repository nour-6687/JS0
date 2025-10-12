//Task one
// let myNumbers = [1, 2, 3, 4, 5];

// const [a, , , , e] = myNumbers;

// console.log(a * e); // 5

// Task 2
// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];

// const [a, b, c, [d, e, [f, g]]] = mySkills;
//
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// Task 3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
//
// function showFriends(arr) {
//   const [a, b, c] = arr;
//   console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// }
//
// showFriends(arr1);
// showFriends(arr2);
// showFriends(arr3);

//Task 4

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };
//
// const {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, , h3],
// } = member;
//
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//
// console.log(`I Live in ${c}`);
//
// console.log(`My Hobbies: ${h1} And ${h3}`);

//Task 5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
const { title: t, developer: d, releases } = game;
const [o, a] = Object.keys(releases);
const [[u, j], { US: u_price, JAP: j_price }, or] = Object.values(releases);

console.log(Object.keys(releases), Object.values(releases));
console.log("==================");

console.log(`My Favourite Games Style Is ${t} Style`);

console.log(`And I Love ${d} Games`);

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);

console.log(`Although I Love ${a}`);

console.log(`${a} Price in USA Is ${u_price}`);

console.log(`${a} Price in Japan Is ${j_price}`);

console.log(`Origin Price Is ${or}`);
