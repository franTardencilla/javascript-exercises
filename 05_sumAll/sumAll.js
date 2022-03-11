const sumAll = function(first, second) {

    if ( typeof first != "number" || typeof second != "number" || first < 0 || second < 0){
        return "ERROR"
    }

    const largerNumber = Math.max(first, second)
    var smallerNumber = Math.min(first,second)
    var sum = 0

    for(smallerNumber; smallerNumber <= largerNumber; smallerNumber++){
        sum += smallerNumber
    }
    return sum
};

console.log(sumAll(1, 5))

// Do not edit below this line
module.exports = sumAll;
