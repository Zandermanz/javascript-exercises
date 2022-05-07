const palindromes = function (string) {
//take string, flip it, compare to original, If equal return true, otherwise false


string = string.toUpperCase(); //converts strings to uppercase

//starting from back or array, take off last letter and add it to reversedString
let reversedString = ""; //defining reversed string before loop
let stringLength = string.length; //defining length outside of loop
for(i = stringLength; i > 0 ; i--){
 let letter = string.slice(i);
 reversedString = reversedString + letter;
}
console.log(reversedString)

//punctuation to strip out
// if (char == " " || char == "." ||char == "?" || char == "," ||char == "!"){
//     //ignore it
//     return;
//}

return (reversedString == string ? true : false);
};

// Do not edit below this line
module.exports = palindromes;
