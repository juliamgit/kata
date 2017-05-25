'use strict';

const find_difference = require('./findCuboidDifference.js');

describe('when two cuboids are given in an array, find the difference between their volumes', () => {
    it('cubes the integers in each array set and subtracts one from the other', () => {
        expect(find_difference([3, 2, 5], [1, 4, 4])).toEqual(14);
        expect(find_difference([9, 7, 2], [5, 2, 2])).toEqual(106);
        expect(find_difference([11, 2, 5], [1, 10, 8])).toEqual(30);
        expect(find_difference([4, 4, 7], [3, 9, 3])).toEqual(31);
        expect(find_difference([15, 20, 25], [10, 30, 25])).toEqual(0);
    });
});



