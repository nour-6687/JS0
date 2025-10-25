// 134
/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

// let str1 = "10 20 100 1000 5000";
// let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";
//
// let invalidEmail = "Osama@@@gmail....com";
// let validEmail = "o@nn.sa";
//
// let ip = "192.168.2.1"; // IPv4
//
// let url = "elzero.org";
// let url = "elzero.org/";
// let url = "http://elzero.org/";
// let url = "http://www.elzero.org/";
// let url = "https://.elzero.org/";
// let url = "https://www.elzero.org/";
// let url = "https://www.elzero.org/?facebookid=asdasdasd";

// console.log("-".repeat(30));
//135
/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global (all matches)
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/gi;

console.log(myString.match(regex));
console.log("-".repeat(30));

// 136

const emailsArr = ["nour@gmail.com", "shalabee@g.net", "mam21", "week12@2.com"];
const emailRegex = /[a-z0-9]+@[a-z0-9]+\.[a-z]+/gi;

const validEmails = emailsArr.filter((email) => emailRegex.test(email));
console.log(validEmails); // ["nour@gmail.com", "shalabee@g.net", "week12@2.com"]

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));
console.log("-".repeat(30));

//137

let myString137 = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z0-9]/g;
console.log(myString137.match(atozSmall));
console.log(myString137.match(NotAtozSmall));
console.log(myString137.match(atozCapital));
console.log(myString137.match(NotAtozCapital));
console.log(myString137.match(aAndcAnde));
console.log(myString137.match(NotaAndcAnde));
console.log(myString137.match(lettersCapsAndSmall));
console.log(myString137.match(numsAndSpecials));
console.log(myString137.match(specials));
console.log("-".repeat(30));

//138
/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));
console.log("-".repeat(30));

// 139

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/gi.test("Osama"));
console.log(/(\bspam|spam\b)/gi.test("1Spam"));
console.log(/(\bspam|spam\b)/gi.test("Spam1"));
console.log("-".repeat(30));

//140

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let nums140 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let nums140Re = /0\d*0/gi;
console.log(nums140.match(nums140Re));

let urls = "https://google.com http://www.website.net web.com"; // http + https
const urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));
console.log("-".repeat(30));

//141

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S
console.log("-".repeat(30));

//142

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString142 = "We Love Programming";
let names142 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString142));
console.log(/^we/gi.test(myString142));
console.log(/lz$/gi.test(names142));
console.log(/^\d/gi.test(names142));

console.log(names142.match(/\d\w{5}(?=Z)/gi));
console.log(names142.match(/\d\w{8}(?!Z)/gi));
console.log("-".repeat(30));

//143

/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re143 = /@/gi;
console.log(txt.replaceAll(re143, "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));
console.log("-".repeat(30));

//144
// form validation
document.querySelector("#form").onsubmit = function () {
  const phoneVal = document.getElementById("phone").value;
  console.log(/\(\d{4}\)\s\d{3}-\d{4}/gi.test(phoneVal));
  return false;
};
console.log("-".repeat(30));
//145
//ONLY DISCUSSION
