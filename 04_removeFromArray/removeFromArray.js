const removeFromArray = function(array, remove) {
let deletedArray = array.splice(remove-1, 1);
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
