const removeFromArray = function(array, ...remove) {
    //We have an array of numbers in array
    //we have an array of numbers to remove in remove
    //Take the first number in remove and loop through array, and 
    //if it matches the first number in the array we remove it,
    //Move to the next number in remove and loop through the array again

    //Outer loop moving through main array
      //loops through array to test if it's a number in remove
    let deletedArray
    for(i = 0; i < array.length; i++){
            //console.log("Evaluating outer loop original array.", "i == ", i, "array[i] == ", array[i]);
            //console.log("array length is ", array.length);
        //inner loop that moves through remove array to test each number in main array
        for(j = 0; j < remove.length; j++){
            //if array[i] == remove[j] --> splice out array[i]
                //console.log("Evaluating inner loop remove array.", "j = ", j ,"remove[j] == ", remove[j]);
                //console.log("remove length is ", remove.length);
            if(array[i] === remove[j]){
                    //console.log("Removing ", array[1]);
                deletedArray = array.splice(i, 1)
                // i-- because the array gets shorter when you delete, so this allows you to keep going 
                    // all the way through the original array
                i--;   
            }   
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
