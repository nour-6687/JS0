// Task One
//
// const myPromise = new Promise((res, rej) => {
//   const req = new XMLHttpRequest();
//   req.open("GET", "./a26.json");
//   req.onload = function () {
//     if ((this.status === 200, this.readyState === 4)) {
//       res(JSON.parse(this.responseText));
//     } else {
//       rej("this is not working.");
//     }
//   };
//   req.send();
// });
//
// myPromise
//   .then((success) => {
//     success.length = 5;
//     return success;
//   })
//   .then((firstFive) => {
//     for (let i = 0; i < firstFive.length; i++) {
//       const div = document.createElement("div");
//       const h3 = document.createElement("h3");
//       const p = document.createElement("p");
//
//       h3.textContent = firstFive[i].title;
//       p.textContent = firstFive[i].description;
//
//       div.append(h3, p);
//
//       document.body.appendChild(div);
//     }
//   });

// Task Two

async function getData(file) {
  const myObject = await fetch(file);
  // If i wanted myData as text i will use myObject.text()
  const myData = await myObject.json(file);
  return myData;
}

getData("./a26.json")
  .then((firstFive) => {
    // firstFive.length = 5;
    // return firstFive;
    return firstFive.slice(0, 5);
  })
  .then((displayedData) => {
    const parentDiv = document.createElement("div");
    parentDiv.innerHTML = displayedData
      .map((item) => {
        return `
      <div>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      </div>
      `;
      })
      // If i did not add join method it will return
      // array not a string . Try removing it to understand.
      .join("");
    document.body.appendChild(parentDiv);
  });
