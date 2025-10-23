let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1, ...n2].length);
console.log(n1.join`+`);
console.log(eval(n1.join`+`) * n2.length);
// Needed Output
// 210
