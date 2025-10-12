/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
const [firstFriend, secondFriend, thirdFriend] = myFriends;
function showDetails(obj) {
  const {
    title: t,
    age: a,
    available: av,
    skills: [, s2],
  } = obj;
  console.log(t, a, av ? "available" : "not available", s2);
}

if (chosen === 1) {
  showDetails(firstFriend);
}
if (chosen === 2) {
  showDetails(secondFriend);
}
if (chosen === 3) {
  showDetails(thirdFriend);
}
