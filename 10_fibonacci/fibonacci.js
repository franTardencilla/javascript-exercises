const fibonacci = function(number) {

    if(number < 0) return "OOPS"
    
    let count = [1,1];
    for(let i = 2; i<number; i++){
        count[i] = count[i - 1] + count[i - 2]
    }

    return count[number - 1]
};


// Do not edit below this line
module.exports = fibonacci;
