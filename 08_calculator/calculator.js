const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;

	if(arr.length == 0) return 0;

  if(arr.length == 1) return arr[0];

  return arr.reduce((total, amount) => total + amount)
};

const multiply = function(arr) {
  return arr.reduce((total, amount) => total * amount, 1)
};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(num) {
	if(num == 0) return 1;

  let product = 1;

  for(let i = num; i > 0; i--) product = product * i
  return product
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
