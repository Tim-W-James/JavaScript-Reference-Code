while (true) {
  // prompt
  const person = prompt("Please enter your name", "John Doe");

  // alert
  alert(`Hello ${person}!`);

  // confirm
  const result = confirm("Is this correct?");
  if (result) {
    break;
  }
}

// timeout
setTimeout(function () {
  alert("BOO!");
}, 3000);
