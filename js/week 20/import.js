import myEX, { num10, arr, sayHello as h } from "./export.js";

console.log(num10);
console.log(arr);
console.log(h());
// The default Export function.
console.log(myEX());

// For the error appearing when running with node.
//Alternative solution:
// Instead of modifying package.json, you can rename your files to use the .mjs extension:
//
// export.js → export.mjs
// import.js → import.mjs
//
// This explicitly tells Node.js these are ES Modules, but adding "type": "module" to package.json is the more common and cleaner approach.

// Other way to import all form export.js.
// import * as allFromExport from "./export.js";
//
// console.log(allFromExport);
//
// console.log(allFromExport.arr);
