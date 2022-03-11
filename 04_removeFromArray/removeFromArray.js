const removeFromArray = function(baseArray, ...ArrayToRemove) {
  /** let ArrayToRemove = Array.prototype.slice.call(arguments,1)*/  

    for(let indexToRemove = 0; indexToRemove <= ArrayToRemove.length - 1; indexToRemove++){
        console.log(`item to remove: ${ArrayToRemove[indexToRemove]}`)
       
        for (let indexInBase = 0; indexInBase <= baseArray.length - 1; indexInBase++){
            console.log(`items in Base: ${baseArray[indexInBase]}`)
            if (ArrayToRemove[indexToRemove] === baseArray[indexInBase]){
                baseArray.splice(indexInBase,1)
            }
        }
        
    }

    return baseArray

};

// Do not edit below this line
module.exports = removeFromArray;
