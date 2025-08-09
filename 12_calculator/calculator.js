const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(numsArr) {
	let sum = 0;

  for (let i = 0; i < numsArr.length; i++){
    sum += numsArr[i];
  }

  return sum;
};

const multiply = function(numsArr) {
  let product = 1;

  for (let i = 0; i < numsArr.length; i++){
    product *= numsArr[i];
  }

  return product;
};

const power = function(base, power) {
  return Math.pow(base, power);
};

const factorial = function (num) {
  let total = 1;

  if (num === 0) {
    return 1;
  }
  else {
    while (num > 0) {
      total *= num;
      num--;
    }

    return total;
  }
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
