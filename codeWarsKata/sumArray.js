/**
 * Created by julia.harper on 3/24/17.
 */

'use strict';

module.exports = addArray;

var arrayOfNumbers = [0, 1, 2, 3];

function addArray() {
    arrayOfNumbers.reduce(function (a, b) {
        return a + b;
    }, 0);
};




