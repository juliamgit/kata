'use strict';

function firstNonConsecutive(array) {
    for(var previous = 0; previous < array.length - 1; previous ++) {
        var current = previous +1;
        if(array[current] - array[previous] != 1) {
            return array[current];
        }
    };

    return null;
}




module.exports = firstNonConsecutive;

// function firstNonConsecutive (arr) {
//
// }

// Your task is to find the first element of an array
// that is not consecutive.

//
// If the whole array is consecutive then return null
//
// The array will always have at least 2 elements
// and all the elements will be numbers.
//     The numbers will also all be unique and in ascending order.
//     The numbers could be positive or negetive
// and the first non-consecutive could be either too!