// One
console.log("1".repeat(10));
const setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);

// Two
console.log("2".repeat(10));
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
const myFriendsSet = new Set(myFriends.sort());
console.log(myFriendsSet);

// Three
console.log("3".repeat(10));
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

const myInfoEntries = Object.entries(myInfo);
console.log(myInfoEntries);
const myInfoMap = new Map(myInfoEntries);

console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));

// Four
console.log("4".repeat(10));

let theNumber = 100020003000;

console.log(
  Number(
    Array.from(new Set([...String(theNumber)]))
      .sort()
      .join(""),
  ),
);

// Another answer from claude and more efficient
console.log(+[...new Set(String(theNumber))].sort().join(""));

// Five
console.log("5".repeat(10));
let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);

// Six
console.log("6".repeat(10));

let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

function rearrange(arr) {
  let numbers = arr.filter((e) => typeof e === "number");
  let letters = arr.filter((e) => typeof e === "string");
  let neededLetters = letters.slice(0, numbers.length);
  return [...neededLetters, ...letters];
}

console.log(rearrange(chars1));
console.log(rearrange(chars2));
console.log(rearrange(chars3));

// Seven
console.log("7".repeat(10));
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne, ...numsTwo]);
console.log("--------------------------------------");
console.log(numsOne.concat(numsTwo));
console.log("--------------------------------------");
numsOne.push(...numsTwo);
console.log(numsOne);

// Eight
console.log("8".repeat(10));
