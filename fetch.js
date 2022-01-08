// import fetch from 'node-fetch';

// * fetch

// fetch by url
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
// chain callbacks
promise
  .then((res) => res.json())
  .then((user) => console.log(user.title))
  .catch((err) => console.log(err)); // catch an error in any of the callbacks

// fetch by filename
fetch("sample.txt")
  .then((res) => res.text())
  .then(console.log);
// alternative solution with async-await
async function getText() {
  const text = await fetch("sample.txt");
  const result = await text.text();
  console.log(result);
}
getText();

// POST request
const title = "title";
const body = "body content";
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-type": "application/json",
  },
  body: JSON.stringify({ title: title, body: body }),
})
  .then((res) => res.json())
  .then(console.log);
