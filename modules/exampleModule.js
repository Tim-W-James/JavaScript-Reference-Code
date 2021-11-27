// default export
export default () => {
  alert('Hello World!');
}

// named export
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

const favNum = 23;
const favColour = 'blue';

// multiple named export
export {
  favNum,
  favColour
}