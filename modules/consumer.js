// default import - can use any name
import sayHelloWorld from './exampleModule.js';
// named import
import {sayHi} from './exampleModule.js';
// named import - can be renamed with as
import {
  favNum as num, 
  favColour as colour
} from './exampleModule.js';

// use imported content
sayHelloWorld();
sayHi('John');
alert(`Fav number is: ${num}`);
alert(`Fav colour is: ${colour}`);