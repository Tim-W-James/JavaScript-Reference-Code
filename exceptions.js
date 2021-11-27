// * try..catch block
try {
  console.log('Start of try runs');
  undefinedVariable; // error, variable is not defined
  console.log('End of try');  // never reached
} catch (err) {
  console.error('Error has occurred!');
  // error details:
  console.warn('name:', err.name);
  console.warn('message:', err.message);
  console.warn('stack:', err.stack);
}

// * practical example
let json1 = "{ bad json }";
try {
  let user = JSON.parse(json1); // <-- when an error occurs...
  alert( user.name ); // doesn't run
} catch (err) {
  // ...the execution jumps here
  console.error('Error caught:');
  console.warn(err.name);
  console.warn(err.message);
}

// * throw error
let json2 = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json2);
  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name'); // throw error
  }
  console.log( user.name );
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error('JSON Error: ' + err.message );
  } else {
    throw err; // rethrow errors that can't be handled here
  }
} finally { // finally block runs in all cases
  console.log('This always executes');
}