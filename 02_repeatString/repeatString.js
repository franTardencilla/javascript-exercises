const repeatString = function(word, timesToRepeat) {
    var newWord = ""

    if (timesToRepeat < 0) return "ERROR"

    for(let i = 1; i <= timesToRepeat; i++){
        newWord += word
    }

    return newWord
};

// Do not edit below this line
module.exports = repeatString;
