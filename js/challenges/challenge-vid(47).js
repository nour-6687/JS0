/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(my.indexOf("Mazero"), my.indexOf("Osama")).reverse()); // ["Elham", "Mazero"]
len6 = my.length;
console.log(
  my[my.indexOf("Elham")].slice(zero, my.indexOf("Elham")) +
    my[my.indexOf("Mazero")].slice(my.indexOf("Elham"), len6)
); // "Elzero"
console.log(my[--len6][counter] + my[my.indexOf("Osama")][zero]); // "rO"
