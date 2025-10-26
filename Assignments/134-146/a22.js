// Task One

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i));
console.log(/^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i.test(ip));
console.log("-".repeat(50));

// Task Two

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// IF we followed the challenge instructions this is right
console.log(specialNames.match(/os\w*o/gi));
// If we followed the instructions and the needed output this is the right one
console.log(specialNames.match(/\b(Os)\d*O/g));
console.log("-".repeat(50));

// Task Three

let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/));
console.log("-".repeat(50));

// Task Four
// Explain this REGEX

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
console.log("http://a.-a.www/.".match(re));
console.log("-".repeat(50));

// Task Five

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

const r = /\d{2}(\/|\s|(\s-\s))\d{2}(\/|\s|(\s-\s))\d{2,4}/gi;
console.log(date1.match(r)); // "25/10/1982"
console.log(date2.match(r)); // "25 - 10 - 1982"
console.log(date3.match(r)); // "25 10 1982"
console.log(date4.match(r)); // "25 10 82"
console.log("-".repeat(50));
