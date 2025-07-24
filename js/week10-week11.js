//!!! WEEK10
//! vid71
/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

//! vid72
/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";
// split convert it into array
// Normal Functions
// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");
// console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });
// console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");
// console.log(ign);
let sw = swappingCases
  .split("")
  .map((ele) =>
    ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
  )
  .join("");
console.log(sw);

let inv = invertedNumbers.map((el) => -el);
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map((el) => (isNaN(parseInt(el)) ? el : ""))
  .join("");
console.log(ign);

//! vid73
/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

//! vid74
/*
  Filter
  - Filter Longest Word By Number
*/
// difference between filter and map the filter uses a true or false condition and return the true the mapping execute the condition and then return
// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbers1 = "Elz123er4o";

let ign1 = ignoreNumbers1
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");

console.log(ign1);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");

console.log(mixedContent);
// using arrow function
let fn = mix
  .split("")
  .filter((el) => !isNaN(parseInt(el)))
  .map((el) => el * el)
  .join("");
console.log(fn);

//! vid75
/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let addReduce = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5);

console.log(addReduce);

//!vid76
/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);

//!vid77
/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesn't Return Anything [Undefined]
  - Break Will Not Break The Loop
  - Doesn't Create New Array Like Map, Filter, Reduce.
*/

let allLis = document.querySelectorAll(".uList77 li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

//!!! WEEK11
//! vid79
/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
  - Object has properties and methods
*/

//! vid80
/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation (for  invalid string like "country of origin")
    Bracket notation can also be used for the valid string like in the example below theName
  - Dynamic Property Name
*/
let varObjCity = "city";
let userObject = {
  // properties
  theName: "NoOr",
  theAge: 23,
  "country of origin": "Egypt",
  city: "Alexandria",
  // methods
  sayHello: () => `Hello From userObject`,
};

console.log(userObject.sayHello());
console.log(userObject.theName);
console.log(userObject.theAge);
console.log(userObject["theAge"]);
console.log(userObject["country of origin"]);
console.log(userObject.city);
console.log(userObject.varObjCity); //undefined
console.log(userObject[varObjCity]); //Alexandria

//! vid81
/*
  Object
  - Nested Object And Trainings
*/

let available = true; // This is a global scope

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    // I can use the global variable using available instead of user.available
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());

//! vid82
/*
  Object
  - Create With New Keyword new Object();
*/
// We can also do this let userObj2 = new Object();
let userObj2 = new Object({
  age: 20,
});

console.log(userObj2);

userObj2.age = 38;
userObj2["country"] = "Egypt";

userObj2.sayHello = function () {
  return `Hello from userObj2`;
};

console.log(userObj2);
console.log(userObj2.age);
console.log(userObj2.country);
console.log(userObj2.sayHello());

//! vid83
/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/
//! IN THIS LESSON CHECK THE BROWSER CONSOLE DO NOT USE QUOKKA
console.log(this); // window object
console.log(this === window); //true not false

myVar1 = 100;

console.log(window.myVar1); // 100 not undefined
console.log(this.myVar1); // 100 not undefined

function sayHello() {
  console.log(this); //window object
  return this;
}
sayHello();

console.log(sayHello() === window); // true not false

// document.getElementById("cl").onclick = function () {
//   console.log(this);// Refers to the owner of the function
// };

let userObj3 = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(userObj3.age);
console.log(userObj3.ageInDays());

//! vid84
//! IN THIS LESSON CHECK THE BROWSER CONSOLE DO NOT USE QUOKKA
/*
  Object
  - Create Object With Create Method
*/

let userObj4 = {
  age: 20,
  doubleAge: function () {
    // change this to userObj4 to see the difference in prototype
    return this.age * 2;
  },
};

console.log(userObj4);
console.log(userObj4.age);
console.log(userObj4.doubleAge());

// can use also Object.create();
let copyObj = Object.create(userObj4); // see the prototype in the console

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

//! vid85
/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

// if there is more than one property with the same name the first one will be taken
let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);
