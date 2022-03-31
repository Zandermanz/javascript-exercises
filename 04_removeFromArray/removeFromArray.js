const removeFromArray = function(array, ...remove) {
    //take remove as a rest parameter to put in all the things to remove
    //then loop through the rest parameter to take out each "argument"
    for (let i = 0; i <= remove.length-1; i++){
        let deletedArray = array.splice(remove-1, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
