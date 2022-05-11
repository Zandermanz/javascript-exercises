const palindromes = function (string) {
//take string, flip it, compare to original, If equal return true, otherwise false

string = string.toUpperCase(); //converts strings to uppercase
string = removePunctuation(string); //standalone function to remove common punctuation
//starting from back or array, take off last letter and add it to reversedString
let reversedString = ""; //defining reversed string before loop
let stringLength = string.length; //defining length outside of loop
for(i = stringLength; i > 0 ; i--){ //loops through string letter by letter, starting at end
 let letter = string.slice(i-1, i); //pulls and defines the selected letter as letter
 reversedString = reversedString + letter; //adds the letter to the reversed string
}
return (reversedString == string ? true : false); //true only if the reversed string and string match
};

//Removes specified punctuation types from any string sent to it
function removePunctuation(string){
    let returnedString = ""; //starts with blank string
    for(i = 0; i <= string.length-1; i++){ //loops through work until it hits string length. -1 because string length is not 0-indexed
        letter = string.charAt(i);
        if (letter == "!" || letter =="?" || letter == " " ||
        letter == "." || letter == "," || letter == ";") continue;
        //ignores letter if it's a common punctuation mark, very limited approach that will easily break
        returnedString += letter;
        //otherwise adds it to the returnedString to send back
    };
    return returnedString;
}

// Do not edit below this line
module.exports = palindromes;

