// 115
/*  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);
let [, y, , z] = myFriends;

console.log(y);
console.log(z);

console.log(
  "=---------------------------------------------------------------------------------=",
);

// 116
/*
  Destructuring
  - Destructuring Array Advanced Examples
*/
let myfriends2 = [
  "gamal",
  "Ahemd",
  "shady",
  ["nour", "mamdouh", ["hamed", "ziad"]],
];

let [, , , [, m, [, v]]] = myfriends2;

console.log(m);
console.log(v);

//117

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);

console.log(
  "=---------------------------------------------------------------------------------=",
);
// 118

/*
  Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: { html: 90, css: 89 },
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
// If there is not variable called theColor in the user object console.log() will display red
const {
  theName,
  theAge,
  theCountry,
  theColor: co = "Red",
  skills: { html: firstSkill, css: SecondSkill },
} = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);
console.log(co);
console.log(firstSkill);
console.log(SecondSkill);
console.log("=--------------------------------------=");
// 119
const { html: h, css } = user.skills;

console.log(`This is my html score: ${h}. And this is my css score ${css}`);

// 120
showDetails(user);

function showDetails({
  theAge: ag,
  theName: na,
  theColor: col,
  skills: { css: cssSkill },
} = user) {
  console.log(
    `My name is ${na}. My age is ${ag}.
      And my color is ${col}.
      And my css skill progress is ${cssSkill}.
      These info from showDetails function`,
  );
}
// 121
const profile = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: pn,
  theAge: pa,
  skills: [phtml, pcss, pJavaScript],
  addresses: { egypt: peg, ksa: pksa },
} = profile;

console.log(pn, pa, phtml, pcss, pJavaScript, peg, pksa);
