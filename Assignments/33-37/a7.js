//? Task1
let num = 110;

num <= 10
  ? console.log(`00${num}`)
  : num > 10 && num < 100
  ? console.log(`0${num}`)
  : console.log(num);

//? Task2
let num01 = 9;
let str = "9";
let str2 = "20";

num01 == str
  ? console.log("{num01} Is The Same Value As {str}")
  : console.log("They are not the same value");

num01 == str && num01 !== str
  ? console.log("{num01} Is The Same Value As {str} But Not The Same Type")
  : console.log("They are the same type");

num01 !== str2
  ? console.log("{num01} Is Not The Same Value Or The Same Type As {str2}")
  : console.log("They are the same value and type");

if (typeof str == typeof str2 && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
} else {
  console.log("They are not the same type");
}
// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

//? Task 3

let num7 = 10;
let num8 = 30;
let num9 = "30";

if (
  num9 > num7 &&
  num9 !== num8 &&
  num9 > num7 &&
  num9 == num8 &&
  num9 !== num8 &&
  num9 !== num7 &&
  num9 !== num8
) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number" +
      "\n" +
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
      "\n" +
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

//? Task 4

// Edit What You Want Here

let num1 = 2;
let num2 = 1;
let num3 = 2;
let num4 = 24;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
