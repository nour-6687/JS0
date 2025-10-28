// Task One
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car ${this.n} is running now.`;
  }
  stop() {
    return `car ${this.n} stopped.`;
  }
}

const carOne = new Car("carOne", 2015, 900000);
const carTwo = new Car("carTwo", 2020, 1000000);
const carThree = new Car("carThree", 2002, 200000);

console.log(
  `Car One name is ${carOne.n} and model is ${carOne.m} and price is ${carOne.p}`,
);
console.log(carTwo.run());
console.log(carThree.stop());
console.log("|*_*|".repeat(20));

// Task Two

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And size is ${this.size}`;
  }
}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
console.log("|*_*|".repeat(20));

// Task Three

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  cardDetails() {
    return this.#c.toString().match(/\d{4}/g).join("-");
  }
  get showData() {
    return `Hello ${this.u} Your credit card number is ${this.cardDetails()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
console.log("|*_*|".repeat(20));

// Task Four

// Write Your Code Here
String.prototype.addLove = function () {
  return `I love ${this} Web school`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
console.log("|*_*|".repeat(20));

// Task Five

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj, {
  score: {
    writable: false,
    enumerable: true,
    configurable: true,
  },
  id: {
    writable: true,
    enumerable: false,
    configurable: true,
  },
  // Or i can just (delete myObj.country;)
  country: {
    enumerable: false,
    writable: false,
    configurable: false,
    value: "",
  },
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`); // Fixed syntax
}

console.log(myObj); // id won't show in most consoles when running by node.
console.log(myObj.id); // But you can still access it directly - prints 100
