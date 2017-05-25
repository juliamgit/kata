'use strict';

function find_difference(a, b) {

    a = a.reduce(function(prev, current) {
        return prev * current;
    });
    b = b.reduce(function(prev, current) {
        return prev * current;
    });

    var cuboidDifference = Math.abs(a - b);

    return cuboidDifference;
}


module.exports = find_difference;

