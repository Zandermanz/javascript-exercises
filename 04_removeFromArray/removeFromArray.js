const removeFromArray = function(array, ...remove) {
    //Outer loop moving through main array loops through array to test if it's a number in remove
    let deletedArray
    for(i = 0; i < array.length; i++){
        //inner loop that moves through remove array to test each number in main array
        for(j = 0; j < remove.length; j++){
            //if array[i] == remove[j] --> splice out array[i]
            if(array[i] === remove[j]){
                deletedArray = array.splice(i, 1)
                // i-- because the array gets shorter when you delete, so this allows you to keep going all the way through the original array
                i--;   
            }   
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
