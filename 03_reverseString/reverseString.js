const reverseString = function(myString) {
    var reversedStringArray = []

    for(let i = 0; i <= myString.length - 1; i++){
        reversedStringArray[i] = myString.charAt(myString.length - 1 - i)
    }

    return reversedStringArray.join("")
};


// Do not edit below this line
module.exports = reverseString;
