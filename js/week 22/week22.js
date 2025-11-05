// 179

/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

// Uncomment setTimeout line 31 for removing the error.
function iamACallback() {
  console.log("Iam A Callback Function");
}
// setTimeout(iamACallback, 2000);

// Callback hell.
// setTimeout(() => {
//   console.log("Download Photo From URL");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Add Logo To The Photo");
//       setTimeout(() => {
//         console.log("Show The Photo In Website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// 180

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = false;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

// We can do myPromise.then as many as we want.
// let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
// let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);
//
// myPromise.then(resolver, rejecter);
//
// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`),
// );

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`),
);

// 181
/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/
const myEmployeePromise = new Promise((resolveF, rejectF) => {
  const emps = ["Nour", "Farouq", "Mahmoud", "Ahmed"];
  if (emps.length === 4) {
    resolveF(emps);
  } else {
    rejectF(Error("Less than four employees"));
  }
});

myEmployeePromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => console.log(resolveValue + ", is my hero."))
  .catch((rejectedValue) =>
    console.log(Error(`Catch the rejected reason ${rejectedValue}`)),
  )
  .finally(() => console.log("final result ."));

//182
/*
  Promise And XHR
*/
const getData1 = (apiURL) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("Data not found!!!"));
      }
    };
    req.open("GET", apiURL);
    req.send();
  });
};

getData1("https://jsonplaceholder.typicode.com/posts/")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].body))
  .catch((rej) => console.log(rej));

// 183
// same example like 182 but using fetch.

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((respond) => {
    console.log(respond);
    const data = respond.json();
    console.log(data);
    return data;
  })
  .then((ten) => {
    ten.length = 10;
    console.log(ten);
    return ten;
  })
  .then((titles) =>
    titles.map((item) => {
      console.log(item.title);
    }),
  );

// 184

/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// when all are resolved return the res for all
// when one is rej or all of them are rej return the first rej.
// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// return all with the status for each
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// the first one even resolved or rejected
Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`),
);

// 185

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

async function getData() {
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getData());

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue),
);

//186

const promiseAwait = new Promise((res, rej) => {
  setTimeout(() => {
    // res("The good promiseeeeeeeeeeeeee");
    rej(Error("The Bad promiseeeeeeeeeeeeee"));
  }, 3000);
});

async function testAwait() {
  console.log("Before Await Promise ");
  // console.log(await promiseAwait.then((accept) => accept));
  await promiseAwait.catch((err) => console.log(err));
  console.log(
    "After Await Promise . And if you are watching from the console you will see the before await promise at the top check the line number to understand. ",
  );
}

testAwait();

// 187
// do it in separate file to see the result in better way .
