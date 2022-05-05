const { run } = require("jest-cli");

const add = function(a, b) {
return a + b;	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let runningTotal = 0;
  array.forEach(element => runningTotal = runningTotal + element);
  return runningTotal;
};

const multiply = function(array) {
  //starts at 1 rather than zero, to avoid multiplication by zero
  let runningTotal = 1;
  array.forEach(element => runningTotal = runningTotal * element);
  return runningTotal;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	// factorial takes a number and multiplies all numbers leading up to it
  // loop take in number, set it as the max, and then loop
  if(number === 0 || number === 1) return 1; //factorial of 0 is also 1
  let runningTotal = 1;
  for (let index = 1; index <= number; index++) {
    runningTotal = runningTotal * index;
  }
  return runningTotal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
