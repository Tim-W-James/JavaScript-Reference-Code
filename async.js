import fetch from "node-fetch";

// * promise

// create
// starts as pending
const arrived = true;
const ride = new Promise((resolve, reject) => {
  // executor (callback function)
  if (arrived) {
    resolve("arrived");
  } else {
    reject("failed");
  }
});

// consume
ride
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("always runs");
  });

const codeBlocker = () => {
  // ! blocking
  // let i = 0
  // while (i < 1000000000) { i++; }

  // ! async blocking
  // return new Promise((resolve, reject) => {
  //   let i = 0;
  //   while (i < 1000000000) { i++; }
  //   resolve('loops done');
  // })

  // non-blocking - must be inside resolve.then callback
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return "loops done";
  });
};
codeBlocker().then(console.log);

// promise.all
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
Promise.all([promise1, promise2, promise3, promise4]).then(console.log);

// * async

// promise function
const getName1 = (name) => {
  const names = {
    name1: "bob",
    name2: "jerry",
    name3: "pam",
  };
  return Promise.resolve(names[name]);
};
// async function
// takes the return value and automatically resolves it as a promise
const getName2 = async (name) => {
  const names = {
    name1: "bob",
    name2: "jerry",
    name3: "pam",
  };
  return names[name];
};

// promise-resolve function
const getNames1 = () => {
  let a;
  return getName1("name1")
    .then((v) => {
      a = v;
      return getName1("name2");
    })
    .then((v) => [v, a]);
};
// async-await
// instead of chaining callbacks,
// use await to pause the execution until the getName promise resolves
const getNames2 = async () => {
  const a = await getName2("name1");
  const b = await getName2("name2");
  // ! poor practice - only need to await b after a if b depends on a

  return [a, b];
};
// instead, get a and b concurrently
const getNames3 = async () => {
  const a = getName2("name1");
  const b = getName2("name2");
  const result = await Promise.all([a, b]); // resolve a and b concurrently

  return result;
};
getNames3().then(console.log);
// error handling
const getNames4 = async () => {
  try {
    const a = getName2("name1");
    const b = getName2("name2");
    const result = await Promise.all([a, b]);

    throw "something broke!"; // throw an error

    return result;
  } catch (err) {
    console.log(err);
    // do something
  }
};

// concurrent loop - for a promise that resolves to an array
const someNames = ["name1", "name2"];
const getSomeNames = someNames.map((v) => getName2(v));
const nameLoop = async () => {
  // awaits the array to resolve, then immediately loops
  for await (const name of getSomeNames) {
    console.log(name);
  }
};
nameLoop();
