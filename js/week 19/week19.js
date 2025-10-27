// 147
// Intro to OOP

// 148
/*
  Constructor Function
  - Old syntax
*/

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }
//
// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);
//
// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);
//
// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);
//
// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);
//
// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

// 149
/*
  Constructor Function
  - New Syntax
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }
//
// let userOne = new User(100, "Elzero", 5000);
//
// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);
//
// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);

// 150

/*
  Constructor Function
  - Deal With Properties And Methods
*/

// class User {
//   constructor(id, username, salary) {
//     // Properties
//     this.i = id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }
//
// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);
//
// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.writeMsg());
//
// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userTwo.msg); // Native Code
// console.log(userTwo.writeMsg); // Native Code

// 151

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }
//
// let userOne = new User(100, "Elzero", 5000);
//
// console.log(userOne.u);
// userOne.updateName("Osama");
// console.log(userOne.u);
//
// let strOne = "Elzero";
// let strTwo = new String("Elzero");
//
// console.log(typeof strOne);
// console.log(typeof strTwo);
//
// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);
//
// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

//152

/*
  Class
  - Static Properties And Methods
  
  Static Keyword:
  - Defines properties/methods that belong to the CLASS itself, not to instances
  - Called directly on the class (User.count) NOT on objects (userOne.count)
  - Shared across all instances - useful for counters, utilities, and configuration
  - Cannot be accessed through instances (userOne.count = undefined)
*/

// class User {
//   // Static Property
//   static count = 0;
//
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }
//
//   // Static Methods
//   static sayHello() {
//     return `Hello From Class`;
//   }
//   static countMembers() {
//     return `${this.count} Members Created`;
//   }
// }
//
// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);
//
// console.log(userOne.u);
// console.log(userTwo.u);
// console.log(userOne.count);
// console.log(User.count);
// console.log(User.sayHello());
// console.log(User.countMembers());

//153

/*
  Class
  - Inheritance
*/

// Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }
//
// // Derived Class
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }
//
// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }
//
// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);
//
// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());

//154

/*
  Class
  - Inheritance
*/

// Parent Class
/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

// class User {
//   // Private Property
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }
//
// let userOne = new User(100, "Elzero", "5000 Gneh");
//
// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);

//155

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }
//
// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
//
// console.log(User.prototype);
//
// let strOne = "Elzero";
//
// console.log(String.prototype);

//156

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }
//
// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne);
//
// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };
//
// Object.prototype.love = "Elzero Web School";
//
// String.prototype.addDotBeforeAndAfter = function (val) {
//   return `.${this}.`;
// };
//
// let myString = "Elzero";

//157

const u1 = {
  name: "nour",
  age: 18,
  nationality: "Egyptian",
};

// One property only.
Object.defineProperty(u1, "phone", {
  // If any of these four descriptor is not written it's value will be false.
  writable: true,
  enumerable: false,
  configurable: true, // If i made this false can't redefineProperty (Object.defineProperty)
  value: 583482911,
});

for (const key in u1) {
  console.log(`${key} : ${u1[key]}`);
}
console.log(u1);

console.log(delete u1.age);
console.log(u1);

//158

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));
