const foo = 23;
const bar = 55;
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log('hello world');
console.log('first line\nsecond line');
console.log('\'quote\'');
console.log('%c CSS in the log!', 'color:red; background-color: black;');
console.log('foo:', foo);
console.log('foo: ' + foo); // concatenation
console.log(`foo: ${foo}`); // template string
console.log({foo, bar});
console.table([foo, bar]);
console.dir(person); // print object

// errors
console.error('error message');
console.warn('warning message');
console.assert(false, 'error message'); // show error if assert condition false

// groups
console.groupCollapsed('my label');
console.log('something in a group');
console.log('something in a group');
console.groupEnd();

// count
console.count('first');
console.count('second');

// time
console.time('timer');
// do some stuff
console.timeLog('timer');

// trace
function bottom() {
  function top() {
    console.trace("where am I?");
  }
  top();
}
bottom();