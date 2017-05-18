'use strict';

function opposite(number) {
    return number * -1;
}

function oppositeB(number) {
    if(number >= 0) {
        return -Math.abs(number);
    } else {
        return Math.abs(number);
    }
}

module.exports = {
    opposite: opposite,
    oppositeB: oppositeB
};