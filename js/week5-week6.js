//!!! WEEK5
//! vid31
/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/
console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log("Osama" === "Ahmed");
console.log(typeof "Osama" === typeof "Ahmed");

//! vid32
/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

//! vid33

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    /// Block Of Code
  }

*/
//! vid34

// Nested if

let price = 100;
let discount = false;
let discountValue = 30;
let country = "Egypt";
let userName = "Shalaby";
let student = true;

if (discount === true) {
  price -= discountValue;
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountValue + 30;
  } else {
    price -= discountValue + 10;
  }
} else if (userName === "Osama") {
  price -= discountValue + 20;
} else {
  price -= 10;
}
console.log(price);

//! vid35
/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = "70";

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}
// condition ? if true : if false

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge <= 20
  ? console.log("Age near or equal 20")
  : theAge > 20 && theAge <= 60
  ? console.log("Age between 20 and 60")
  : theAge > 60
  ? console.log("Age larger than 60")
  : console.log("Unknown");
//! vid36
/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
//? the falsy value types are [null, undefined, false, 0, "" (empty string)]
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

let price1 = null;
console.log(`The price is ${price1 || 200}`);
//? return any falsy values except null or undefined
console.log(`The price is ${price1 ?? 200}`);
//! vid37 challenge
//! vid38
/*
  Switch Statement
  switch(expression) {
    Case 1:
      /// Code Block
      break;
    Case 2:
      /// Code Block
      break;
    Default:
      /// Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = "1";

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Unknown day");
}

//!!! WEEK6
//! vid40
/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(typeof myFriends);
console.log(Array.isArray(myFriends));
console.log(Array.isArray(userName));

//! vid41
/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let Friends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

//? If i needed to add another element in at the end of my array using length
Friends[Friends.length] = "nour";
console.log(Friends);

// ? If i needed to update the last element of my array using length
Friends[Friends.length - 1] = "Ibrahim";
console.log(Friends);
Friends.length = 2;
console.log(Friends);

//! vid42
// ? shift(), pop()
// ? unshift(), push()
/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let friends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(friends);

friends.unshift("Osama", "Nabil");

console.log(friends);

friends.push("Samah", "Eman");

console.log(friends);

let first = friends.shift();

console.log(friends);

console.log(`First Name Is ${first}`);

let last = friends.pop();

console.log(friends);

console.log(`Last Name Is ${last}`);

//! vid43
/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let friends2 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(friends2);

console.log(friends2.indexOf("Ahmed"));
console.log(friends2.indexOf("Ahmed", 2));

console.log(friends2.lastIndexOf("Ahmed"));
console.log(friends2.lastIndexOf("Ahmed", -2));

console.log(friends2.includes("Ahmed"));
console.log(friends2.includes("Ahmed", 2));

if (friends2.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(friends2.indexOf("Osama"));
console.log(friends2.lastIndexOf("Osama"));

//! vid44
/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

let friends3 = [
  10,
  "Sayed",
  "Mohamed",
  "90",
  9000,
  100,
 
  20,
  "10",
  -20,
  -10,
  111,
  190,
  109,
  0,
  11,
  200,
];

console.log(friends3);
console.log(friends3.sort());

//! vid45
/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All ArrayP
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/
// ? Splice takes the spliced elements and store it and i may store it in a variable
// ? And if i printed the array it will be without the spliced elements
// ? In other way the splice affects the real array and the slice doesn't

let friends4 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(friends4);
console.log(friends4.slice());
console.log(friends4.slice(1));
console.log(friends4.slice(1, 3));
console.log(friends4.slice(-3));
console.log(friends4.slice(1, -2));
console.log(friends4.slice(-4, -2));
console.log(friends4);

let f4 = friends4.splice(1, 2, "Sameer", "Samara");
console.log(f4);

console.log(friends4);

//! vid46
/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let friends5 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = friends5.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);
// ? Convert it to String
console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());
