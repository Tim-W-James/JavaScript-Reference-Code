// alert('Hello world!');

// * variables

// var - function scoped
var foo = 5; // ! best to avoid
foo = 7;

// let - block scoped
let bar = 8;
bar = 14;

// const - cannot be reassigned
const pi = 3.14;
// pi = 4.69; // ! illegal operation - reassignment
// const phi = 1.61 // ! illegal operation - must be defined

// blocks
// with let, each localVariable is only visible in its respective block (aka Lexical env)
{
  let localVariable = 5;
  console.log('localVariable:', localVariable);
}
{
  let localVariable = 7;
  console.log('localVariable:', localVariable);
}
// with var, globalVariable is hoisted to global scope
{
  var globalVariable = 12;
}
console.log('globalVariable:', globalVariable);

// * data types

// String
const genericName = 'John';
// escape characters
const newLine = 'first line\nsecond line';
const quote = '\'quote\'';
// template string
const templateStr = `name: ${genericName}`;

// Number
const age = 30;
const rating = 4.5;

// Boolean
const isEnabled = true;

// null
const x = null;

// undefined
const y = undefined;
let z;

// dynamic typing
let something = 5;
something = 'hello!';

// get type
console.log('type of age:', typeof age);


// * String properties and methods

const s = 'Hello world';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(' '));

// ASCII
const character = 'A';
// convert to ASCII
let asciiValue = character.charCodeAt(0);
asciiValue++; // add 1 to A and get B
// convert back to String
console.log(`ASCII code for ${String.fromCharCode(asciiValue)} is ${asciiValue}`);

// * Math and Random

console.log(60 % 3); // modulo / remainder
console.log(2 ** 3); // exponent

// decimal places
let lotsOfDecimal = 1.766584958675746364;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

// string to number
const myNumberString = '74';
const myNumber = Number(myNumberString);
console.log(myNumber + 6);

// random numbers
console.log('random number:', Math.random()); // between 0 and 1
function getRandomInt(min, max) { // random number between min (included) and max (excluded)
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log('random number:', getRandomInt(5, 2)); // 2, 3, or 4


// * Arrays

const someNumbers = new Array(1,2,3,4,5);
const fruits  = ['apple', 'orange', 'pear'];
const stuff   = ['car', 15, true];

fruits[0] = 'banana';         // update
fruits[3] = 'mango';          // add to end by index
fruits.push('pineapple');     // add to end
fruits.unshift('strawberry'); // add to start
fruits.pop();                 // remove last value

console.table(fruits);
console.log('first fruit:', fruits[0]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('orange'));
console.log(fruits.some(v => v === 'pear'));

// arrays are reference types (use spread operator instead)
const someOtherNumbers = someNumbers;
someOtherNumbers.push(6);
console.log(someNumbers); // ! updating the new array also updates the original


// * spread operator

const temperatures = [76, 72, 68, 79, 54, 65];
// each item in the array is treated as a separate argument
console.log(...temperatures);
console.log(Math.min(...temperatures));
// alternative solution
console.log(Math.min.apply(null, temperatures));

// array literals
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5];
const numbers3 = [...numbers1, ...numbers2, 6, 7]; // combine arrays
console.log(numbers3);

// copy an array - updating numbers4 does not update numbers1
const numbers4 = [...numbers1]; // ! only goes one level deep for nested arrays

// useful for immutability - we can keep the original of a parameter and instead update a copy
// ! use for react
const todos = [
  {user: 'Bob', completed: false, task: 'Upload File'},
  {user: 'Pam', completed: true, task: 'Send Email'}
]

function addTodo (newTodo) {
  return [...todos, {...newTodo, completed: false}];
}

const newTodos = addTodo({user: 'Jack', task: 'Upload Video'})
console.log(todos); // original is not mutated
console.log(newTodos);

// rest parameters - allow any number of arguments
function sumAll(...args) {
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }

  return sum;
}
console.log(sumAll(1)); // 1
console.log(sumAll(1, 2, 3)); // 6


// * object literals

const person = {
  firstName: 'John',
  lastName:  'Doe',
  age:       30,
  hobbies:   ['music', 'tv', 'hiking'],
  address:   {
    street: '50 main st',
    city:   'Canberra',
    state:  'ACT'
  }
}

person.email = 'john@gmail.com';

console.dir(person);
console.log(person.firstName);

// clone an object // ! only goes one level deep
const personClone1 = Object.assign({ }, person);
const personClone2 = { ...person }; // spread operator

// destructuring AKA unpacking
const { fName, lName, address: { city } } = person;

// JSON
const personJSON = JSON.stringify(person);
console.log(personJSON);


// * selection & conditionals

const valueA = 10;

// if
if (valueA == 10) {
  console.log('valueA is 10');
}

// if-else
if (valueA == 10) {
  console.log('valueA is 10');
}
else {
  console.log('valueA is not 10');
}

// if-else-if-else
if (valueA == 10) {
  console.log('valueA is equal to 10');
}
else if (valueA > 10) {
  console.log('valueA is greater than 10');
}
else {
  console.log('valueA is less than 10');
}

// switch
switch (valueA) {
  case 1:
    console.log('valueA is 1');
    break;
  case 5:
    console.log('valueA is 5');
    break;
  case 10:
    console.log('valueA is 10');
    break;
  default:
    console.log('valueA is not 1, 5, or 10');
    break;
}

// ternary operator
const isAGreaterThan5 = valueA > 5 ? true : false; 
console.log('isAGreaterThan5:', isAGreaterThan5);

// or conditional
if (valueA == 10 || valueA == 5) {
  console.log('valueA is equal to 10 or 5');
}

// and conditional
if (valueA > 5 && valueA < 15) {
  console.log('valueA is between 5 and 15 (exclusive)');
}

// match by data type
const valueB = '10';
if (valueB === 10) {
  console.log('valueX is 10');
}


// * iteration

// for loop
for (let index = 0; index < 10; index++) {
  console.log("for loop - ", index);
}

// while loop
let index = 0;
while (index < 10) {
  console.log("while loop - ", index);
  index++;
}

const pets = ['cat', 'dog', 'fish'];

// for of loop - for iterables
for (let pet of pets) {
  console.log('for of - pet:', pet);
}
const cat = {name: 'Max', breed: 'Grey Tabby', age: 3};
// turn an object into an iterable
for (const v of Object.values(cat)) {
  console.log(v);
}

// for in loop - for objects
for (const key in cat) {
  console.log(`${key}: ${cat[key]}`);
}

// break
for (let pet of pets) {
  console.log('break - pet:', pet);
  if (pet == 'dog') {
    break; // jump out of loop
  }
}

// continue
for (let pet of pets) {
  if (pet == 'dog') {
    continue; // jump out of an iteration
  }
  console.log('continue - pet:', pet);
}

// labels
loop1:
for (let pet of pets) {
  if (pet == 'dog') {
    // allows breaks or continues to target a specific block or loop
    // useful for nested loops
    continue loop1;
  }
  console.log('labels - pet:', pet);
}


// * functions

// declaration
function addNums (num1 = 1, num2 = 1) { // pure function - does not use external data
  return num1 + num2;
}
console.log(`result: ${addNums(6, 4)}`);
console.log(`result: ${addNums()}`); // parameterless (uses default values)

// immediately invoked function expression
(function sayCheese () {
  console.log('cheese');
})();

// workaround for named params by using an object
function makeLunch (opts) {
  const { main, side, drink } = opts;
  console.log(`Lunch includes ${main}, ${side}, and ${drink}.`);
}
makeLunch({ main: 'wrap', side: 'chips', drink: 'tea'});

// arrow functions (expression)
const multiplyNums = (num1 = 1, num2 = 1) => num1 * num2;

console.log(`result: ${multiplyNums(2, 5)}`);

// first class functions - treated as objects and can be used as arguments
function printResult (f, num1, num2) {
  console.log('function result:', f(num1, num2));
}
printResult(multiplyNums, 2, 6);

// closures
// combination of the Lexical Environment and function body
let b = 3;
// impure function
function impureFunction (a) {
  // references data outside of its scope, which creates a closure
  // in this case, the closure covers the global Lexical Environment and this function block
  return a + b;
}
function outer() {
  let state = 'something';
  // inner function has access here
  function inner() {
    // outer function does not have access here
    return `Hello ${state}`;
  }
  return inner;
}

// currying
const subtractNums = (num1) => { // function factory
  return (num2) => {
    return num1 - num2;
  }
} 
const subtractFrom5 = subtractNums(5);
const subtractFrom10 = subtractNums(10);
// in the Lexical environment of subtractFrom5, num1 is 5
// similarly, subtractFrom10 has num1 as 10 in its Lexical environment
// though both functions have different Lexical environments, they share the same function body
console.log(`result: ${subtractFrom5(2)}`);


// * recursion

// factorial
function factorial(num) {
  // base case
  if (num === 1) {
      return 1;
  }
  // recursive / step case
  else {
      return num * factorial(num - 1); // recursive call
  }
}
console.log(`The factorial of ${5} is ${factorial(5)}`);

/* factorial of 5 is evaluated as follows:
Step 1: factorial(5);
Step 2: 5 * factorial(4);
Step 3: 5 * 4 * factorial(3);
Step 4: 5 * 4 * 3 * factorial(2);
Step 5: 5 * 4 * 3 * 2 * factorial(1);
Step 6: 5 * 4 * 3 * 2 * 1;
*/

// tail-end recursion is better optimized
function tailRecursiveFactorial(number, result = 1) {
  if(number === 1) {
      return result;
  } else {
      return tailRecursiveFactorial(number - 1, result * number);
  }
}
/* now the factorial of 5 is evaluated as follows:
Step 1: tailRecursiveFactorial(5, 1)
Step 2: tailRecursiveFactorial(4, 5)
Step 3: tailRecursiveFactorial(3, 20)
Step 4: tailRecursiveFactorial(2, 60)
Step 5: tailRecursiveFactorial(1, 120)
fewer operations and fewer items on the stack */

// fibonacci
function fibonacci(num) {
  if(num < 2) {
      return num;
  }
  else {
      return fibonacci(num-1) + fibonacci(num - 2);
  }
}
console.log(`The fibonacci of ${6} is ${fibonacci(6)}`);


// * higher order functions

const countries = ["Australia", "America", "Japan"];

// forEach
countries.forEach(function(country) {
  console.log('country:', country);
});
// form: current, currentIndex, entireArray
countries.forEach(function(country, index, countries) {
  console.log('country:', country, ", index:", index, ", countries:", countries);
});

// map
const countryLengths = countries.map(function(country) {
  return country.length;
});
console.log('countryLengths:', countryLengths);

// filter
const countriesStartingWithA = countries.filter(function(country) {
  return country.charAt(0) == 'A';
});
// via arrow function (alternative)
const countriesStartingWithJ = countries.filter(country => country.charAt(0) == 'J');
console.log('countriesStartingWithA:', countriesStartingWithA);
console.log('countriesStartingWithJ:', countriesStartingWithJ);

// sort
const unsortedNumbers = [8, 4, 3, 12, 9];
const sorted = unsortedNumbers.sort(); // ! only checks first digit of each value
console.log('sorted:', sorted);
const sortedDescending = unsortedNumbers.sort(function(number1, number2) {
  if (number1 < number2) {
    return 1;
  }
  else {
    return -1;
  }
});
console.log('sortedDescending:', sortedDescending);
// via arrow function and ternary (alternative)
const sortedAscending = unsortedNumbers.sort((number1, number2) => (number1 > number2 ? 1 : -1));
console.log('sortedAscending:', sortedAscending);

// reduce AKA fold
const arrayOfNumbers = [17, 3, 6, 13, 8];
// form: (accumulator, current, currentIndex, entireArray) => function, initialValue
const numbersSum = arrayOfNumbers.reduce((total, number) => total + number, 0);
console.log('numbersSum:', numbersSum);
// if order matters, can be done in reverse instead
const numbersSubtract = arrayOfNumbers.reduceRight((total, number) => total + number, 0);


// * pass-by-reference vs pass-by-value

function changeStuff(a, b, c)
{
  // primitives are pass-by-value so will not propagate changes
  a = a * 10;
  // object internals are pass-by-reference so will propagate changes
  b.item = "changed";
  // objects themselves are pass-by-value so will not propagate changes
  c = {item: "changed"};
}

let num = 10;
let obj1 = {item: "unchanged"};
let obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);

// * this
// current execution context: the global environment or an object 
const someObject = {
  someProperty: '😆'
}
function hello() {
  return this.someProperty;
}
// const result = hello(); // ! bound to the global object which doesn't have the property
const functionResult = hello.call(someObject); // instead, pass an object that has the property
console.log(functionResult);

function whatIsThis() {
  console.log(this);
}
const anotherObject = {
  someProperty: '😂',
  whatIsThis
}
const yetAnotherObject = {
  someProperty: '😌'
}
whatIsThis(); // global
anotherObject.whatIsThis(); // points to anotherObject
const whyIsThis = whatIsThis.bind(yetAnotherObject); // new function that points to yetAnotherObject
whyIsThis();

// method chaining
function Chain() {
  this.chainMe = function () {
    console.log('chaining...');
    return this;
  }
}
const chainObject = new Chain();
chainObject.chainMe().chainMe().chainMe();


// * object oriented

// constructor
function Student (firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);

  // method
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  }
}
// method by prototype (alternative)
Student.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// instantiation
const student1 = new Student('Tim', 'J', '1-5-2001');

console.dir(student1);
console.log('student1 year of birth:', student1.getBirthYear());
console.log('student1 name:', student1.getFullName());

// class (alternative)
class Employee {
  constructor (firstName, lastName, company, salary = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    // use _ so that name doesn't conflict with getter and setter
    this._company = company;
    // salary has a default value
    this.salary = salary;
  }

  // getter
  get company () {
    return this._company;
  }

  // setter
  set company (newCompany) {
    this._company = newCompany;
  }
  
  sayHello () {
    console.log(`Hello ${this.firstName}.`);
  }

  // methods can be getters so they can be called like properties
  get fullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}

const employee1 = new Employee('John', 'Doe', 'Google');
employee1.company = 'Amazon'; // calls a setter
employee1.sayHello();

console.dir(employee1);
console.log()
console.log('employee1 name:', employee1.fullName); // calls a getter

// inheritance
class SeniorEmployee extends Employee {
  constructor (firstName, lastName, company, yearsWorked) {
    // call the parent constructor
    super(firstName, lastName, company);
    this.yearsWorked = yearsWorked;
  }

  // add new method
  sayGoodbye () {
    console.log(`Goodbye ${this.firstName}.`);
  }

  // override method
  sayHello () {
    console.log(`Hello ${this.firstName}. You've been here ${this.yearsWorked} years!`);
  }
}

const seniorEmployee1 = new SeniorEmployee('Jerry', 'Jones', 'Facebook', 9);
seniorEmployee1.sayHello();
seniorEmployee1.sayGoodbye();

console.dir(seniorEmployee1);
console.log('seniorEmployee1 name:', seniorEmployee1.fullName);

// debugger; // * creates a breakpoint in a browser debugger