const reverseString = function(string) {
  //take last letter of string and add it to reversedString one at a time, until .length is reached
  //Not zero indexed, .length measures full number of characters
  stringLength = string.length;
  //set what will be return to a blank string.
  let reversedString = "";
  //loop starts at the last number, taking last character and putting it in reversed string
  for(let i = stringLength; i > 0 ; i--){
    reversedString = reversedString + string.slice(i-1, i);
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
