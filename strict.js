// * strict mode

// invoke strict mode for the whole script
"use strict";

x = 6; // ! throws an error at runtime - strict enforces variable declaration

function strict() {
  // function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() {
  return "I'm not strict.";
}
