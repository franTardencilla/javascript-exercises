const leapYears = function(year) {
  var result= false
   if (year % 4 == 0){
        result = true
       if(year % 100 == 0 && year % 400 != 0){
        result = false
       }
  
   } else{
    result = false
   }

   return result
};

// Do not edit below this line
module.exports = leapYears;
