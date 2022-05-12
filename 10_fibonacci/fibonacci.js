const fibonacci = function(number) {
//take input, iterate over loop up to that number, popping next number into array, until number is hit.
// 1, 1, 2, 3, 5, 8, 13...
// fibonacci(4) should return 3
    if (number <= 0) return "OOPS"
    const fibonacci = [1, 1];
    for(let i= 2; i <= number; i++){
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1])
    }
    return fibonacci[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
