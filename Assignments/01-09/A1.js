//* Task One
/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script>
      ?Code One fails because it runs before the DOM is fully loaded, resulting in a null reference error when trying to access the element with ID "el". 
      document.getElementById("el").style.color = "red";
    </script>
    <script>
      ?Code Two works correctly as it waits for the page to load before executing. 
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      ?Code Three also works since it runs after the body is loaded. 
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>
*/

//* Task Two
// Create an h1 element
const h1Element = document.createElement("h1");

// Add text to the element
h1Element.textContent = "Elzero";

// Add CSS properties
h1Element.style.color = "blue";
h1Element.style.fontSize = "80px";
h1Element.style.fontWeight = "bold";
h1Element.style.textAlign = "center";
h1Element.style.fontFamily = "Arial";

// Append the element to the page
document.body.appendChild(h1Element);

//* Task Three
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size:40px",
  "color: green; font-weight: bold; font-size: 40px",
  "color: blue; font-size: 40px"
);

//* Task Four
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

//* Task Five
console.table(["Nour","Mamdouh","Elsayd"])

//* Task Six
// console.log("Iam In Console");
// document.write("Iam In Page");
/* console.log("Iam In Console");
document.write("Iam In Page"); */