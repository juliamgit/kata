'use strict';

function sumMix(mixedArray){
        return mixedArray.reduce((a, b) => {
                return a + +b;
    }, 0);
};

module.exports = sumMix;
