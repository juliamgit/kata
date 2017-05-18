'use strict';


function squareSum(numbers) {
    return numbers.map(function square(number) {
            return number * number;
    }).reduce(function (a, b) {return a + b;}, 0);
}



// Math.pow(base, exponent)

module.exports = squareSum;

