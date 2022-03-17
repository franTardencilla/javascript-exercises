

const findTheOldest = function(people) {
   const array = people.sort((a,b) => {
    let aAge = 0;
    let bAge = 0;
    (a.yearOfDeath) ? aAge = a.yearOfDeath - a.yearOfBirth : aAge = new Date().getFullYear() - a.yearOfBirth;
    (b.yearOfDeath) ? bAge = b.yearOfDeath - b.yearOfBirth : bAge = new Date().getFullYear() - b.yearOfBirth;
 
    return (bAge > aAge) ?  1 :  -1
    })

    return array[0]
};

// Do not edit below this line
module.exports = findTheOldest;
