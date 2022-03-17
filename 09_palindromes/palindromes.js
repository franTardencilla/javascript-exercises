const palindromes = function (sentence) {
    let regex = /[^a-z]/gi
 
    const base = sentence.replace(regex,"").toLowerCase()
    console.log(base)
    return base.split("").reverse().join("") === base
};

// Do not edit below this line
module.exports = palindromes;
