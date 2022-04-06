const sumAll = function(numOne, numTwo) {
    
    // error checking section returns error if negative or are non numbers
    if (numOne < 0 || numTwo < 0 || Number.isInteger(numOne) == false || 
        Number.isInteger(numTwo) == false ){
        return "ERROR"
    }

    // takes the original numbers from the function and assigns them higher and lower values 
    // allowing user to input higher values first
    let higherNumber = 0;
    let lowerNumber = 0;
    if (numOne > numTwo){
        higherNumber = numOne;
        lowerNumber = numTwo;
    } else{
        higherNumber = numTwo;
        lowerNumber = numOne;
    }

    //define sum variable to hold our running sum, define it here first to start with initial number outside of the loop
    let sum = lowerNumber;
    // look through code adding the next number to the sum, until we hit the higher number
    for (i=lowerNumber +1; i <= higherNumber; i++){
        sum = sum + i;
    }   
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
