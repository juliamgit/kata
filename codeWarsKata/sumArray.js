/**
 * Created by julia.harper on 3/24/17.
 */

'use strict';

module.exports = addArray;

function addArray(arrayOfNumbers) {
    return arrayOfNumbers.reduce((a, b) => {
        return a + b;
    }, 0);
}



