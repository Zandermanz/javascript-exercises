const repeatString = function(string, num) {
    if(num<0) return "ERROR";
    if(num==0) return "";
    let fullString = string;
    for(let i = 1; i < num; i++){
    fullString = fullString+string;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
