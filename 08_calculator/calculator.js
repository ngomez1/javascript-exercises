const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((sum,item)=> sum + item, 0);
};

const multiply = function(a) {
  return a.reduce((sum,item)=> sum * item, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let count = a;
  let product = 1;
  while(count > 0) {
    product *= count;
    count -= 1;
  }
  return product;
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
