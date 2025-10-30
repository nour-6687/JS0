const num10 = 10;
let arr = [1, 2, 3, 4];
function sayHello() {
  return `Hello From export`;
}

export { num10, arr, sayHello };

export default function () {
  return `This is my export default function and i can name it anything when importing it and i must not 
    add it with the named import names`;
}
