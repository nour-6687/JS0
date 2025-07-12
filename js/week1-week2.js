//! WEEK1
/*
* Output To Screen
  - window.alert()
  - document.write()
  - console.log()

* Syntax
*/

// Event handler this code will only run after the entire webpage has finished loading.
window.onload = function () {
  document.getElementById("el").style.color = "red";
};

// window.alert("Hello From JS File");

document.write("<h1>Hello <span>Page</span></h1>");

console.log("Hello From JS File");

/*
* Console Methods
  - log
  - error
  - table

* Web API

* Styling Console
  - Directive %c
*/

console.log("Log");
console.error("Error");
console.table(["Osama", "Ahmed", "Sayed"]);

console.log(
  "Hello From %cJS %cFile",
  "color: red; font-size: 40px",
  "color: blue; font-size: 40px"
);

//! WEEK2
/*
* Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
*/

console.log("Osama Mohamed");
console.log(typeof "Osama Mohamed");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof { name: "Osama", age: 17, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

/*
* Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed
*/

var user = "nour";
console.log(user);

/*
* Identifiers
  - Name Conventions And Rules
  - Reserved Words
* Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

* Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

* Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

*var variables can be updated and re-declared within its scope;
*let variables can be updated but not re-declared;
*const variables can neither be updated nor re-declared.
*/

var userName = "nour";

console.log(userName);

/* 
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/

console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log('Elzero Web "School"');
console.log("Elzero \\ Web 'School'");
console.log(
  "Elzero \
Web \
School"
);
console.log("Elzero\nWeb\nSchool");

/*
  Concatenation
*/

let a1 = "We Love";
let b1 = "JavaScript";

document.write(a1 + " " + b1);

console.log(a1, b1);

/*
  Template Literals (Template Strings)
*/

// First Example

let a2 = "We Love";
let b2 = "JavaScript";
let c2 = "And";
let d2 = "Programming";

console.log((a2 = ' "" ' + b2 + "\n" + c2 + " " + d2));

console.log(`${a2} "" '' \\ ${b2}
${c2} ${d2}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);

// vid(17) challenge