const ftoc = function (temp) {

  const newTemp =  ((temp - 32) * (5/9))

  console.log(newTemp)
  return (newTemp % 1 == 0) ? newTemp : parseFloat(newTemp.toFixed(1))
};

const ctof = function(temp) {
  const newTemp = ((temp * (9/5)) + 32)
  return (newTemp % 1 == 0) ? newTemp : parseFloat(newTemp.toFixed(1))
};

console.log(ftoc(100))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
