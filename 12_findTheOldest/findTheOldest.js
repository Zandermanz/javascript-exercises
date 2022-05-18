const findTheOldest = function(people) { //sort array so oldest are on top
    //gets current year for use later
    const fullYear= new Date().getFullYear();
    //loop to calculate age
    for (let i = 0; i < people.length; i++) {
        if(people[i].yearOfDeath == undefined){
         people[i].age = fullYear - people[i].yearOfBirth;
        } else people[i].age = people[i].yearOfDeath- people[i].yearOfBirth;
    }
    
    const sorted = people.sort((a,b) => a.age > b.age ? -1 : 1);

    //console.log(sorted);

//return the name of the first person in the array
return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;


