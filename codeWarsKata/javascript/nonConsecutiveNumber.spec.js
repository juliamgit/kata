'use strict';

const firstNonConsecutive = require('./nonConsecutiveNumber.js');

describe('when given an array of integers', () => {

    it('finds and returns the first non consecutive number', () => {
        expect(firstNonConsecutive([1,2,3,4,6,7,8])).toEqual(6);
        expect(firstNonConsecutive([1,3,4,5,6,7,8])).toEqual(3);
        expect(firstNonConsecutive([91,93,94,95])).toEqual(93);
    });
    it('returns null when all numbers are consecutive', () => {
        expect(firstNonConsecutive([1,2,3,4,5,6,7,8])).toBeNull();
    });
});



// Test.describe('a simple example', function() {
//     const first = firstNonConsecutive([1,2,3,4,6,7,8])
//     Test.assertEquals(first, 6)
// })
