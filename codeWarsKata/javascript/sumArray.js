'use strict';

module.exports = addArray;

function addArray(arrayOfNumbers) {
    return arrayOfNumbers.reduce((a, b) => {
        return a + b;
    }, 0);
}



