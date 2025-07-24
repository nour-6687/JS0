//!!! WEEK3
//! vid18
/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/
console.log(10 + 20);
console.log(10 + "nour");

console.log(10 - 20);
console.log(10 - "nour");
console.log(typeof NaN)

console.log(10 * 20);
console.log(10 * 2 * 2);
console.log(10 / 20);
console.log(2**2)
console.log(11 % 2);
let num = 1;
console.log(num++);
console.log(num);
console.log(--num);
console.log(num);

//! vid19
/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
console.log(+10);
console.log(+ "10");
console.log(+ "-10");
console.log(+ "nour");
console.log(+ "10.5");
console.log(+ "0xFF");
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-10);
console.log(- "10");
console.log(- "-10");
console.log(- "nour");
console.log(- "10.5");
console.log(- "0xFF");
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("10"));

//! vid20
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/
let a = "10";
let b = 20;
let c =true;
console.log(+a + b);
console.log(a - b);
console.log(+"");
console.log(+"" - 2);
console.log(+false);
console.log(+true);
console.log(a + b + c);
console.log(+a + b + c);

//! vid21
/*
Assignment Operators
*/
let x = 10;
x = x + 5;
x += 5;
console.log(x);

//! challenge-vid22

//!!! WEEK4
//! vid23
/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10 );
console.log(1000000.00);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1);//it does not change the value

//! vid24
/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());//return string
// console.log(100..toString());
console.log(100.123.toString());//return string
console.log(1020.33653.toFixed(2));//return string
console.log(parseInt("100"));
console.log(parseInt("100.56 nour"));
console.log(parseInt("nour 100"));
console.log(parseInt("nour 100 nour"));
console.log(parseFloat("100.5624 nour"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama" / 20));

//! vid25
/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/
console.log(Math.round(1.4));
console.log(Math.round(1.5));

console.log(Math.ceil(1.4));
console.log(Math.ceil(1.5));

console.log(Math.floor(1.4));
console.log(Math.floor(1.9));

console.log(Math.min(1, 2, -3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));

console.log(Math.pow(10, 6));

console.log(Math.random());

console.log(Math.trunc(1.9));//return integer only

//! challenge-vid26

//! vid27
/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/
let theName = "Nour";
let theNameWhiteSpace = "     Nour     ";
console.log(theName[0]);
console.log(theName[5]);
console.log(theName.charAt(1));
console.log(theName.charAt(5));
console.log(theName.length);

console.log(theNameWhiteSpace.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
// chaining methods
console.log(theNameWhiteSpace.trim().toUpperCase().charAt(1));


//! vid28
/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a28 = "Elzero Web School";
console.log(a28.indexOf("Web"));
console.log(a28.indexOf("Web",8));
console.log(a28.indexOf("o",5));
console.log(a28.lastIndexOf("o"));

console.log(a28.slice(2, 6));
console.log(a28.slice(-10,-8));

console.log(a28.repeat(5));

console.log(a28.split(""));
console.log(a28.split(" ", 1));

//! vid29
/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End then Will Swap places 
  --- Start < 0 (-ve) then It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

console.log(a28.length)

console.log(a28.substring(2, 6));
console.log(a28.substring(6, 2));// swap places
console.log(a28.substring(-10, 6));// start from 0
console.log(a28.substring(a28.length-1));// get last character
console.log(a28.substring(a28.length-5, a28.length-3));

console.log(a28.substr(2, 4));
console.log(a28.substr(2, 100));// if start >= length return empty string
console.log(a28.substr(-5, 2));// start from end

console.log(a28.includes("Web"));
console.log(a28.includes("Web", 8));

console.log(a28.startsWith("E"));
console.log(a28.startsWith("W", 8));

console.log(a28.endsWith("School"));
