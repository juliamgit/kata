/**
 * Created by julia.harper on 3/17/17.
 */
'use strict';

module.exports = createArray;

function createArray(number){
    var newArray = [];

    for(var counter = 1; counter <= number; counter ++){
            newArray.push(counter);
    }

        return newArray;
    }