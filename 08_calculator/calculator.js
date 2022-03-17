const add = function(...numbers) {
	return numbers.reduce((total, number) =>{
    return total + number
  }, 0)
};

const subtract = function(...numbers) {
  return numbers.reduce((total, number) =>{
    return Math.abs(number - total)
  }, 0)
};

const sum = function(numbers) {
	return numbers.reduce((total, number) =>{
    return parseInt( total + number)
  }, 0)
};


const multiply = function(numbers) {
  return numbers.reduce((total, number) => {
    return total * number
  }, 1)
};

const power = function(base, exponent){
	return Math.pow(base, exponent)
};

const factorial = function(number) {
if(number === 0) return 1

	let sum = 1
  for(let i = 1; i <= number; i++){
    sum *= i
  }
  return sum
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
