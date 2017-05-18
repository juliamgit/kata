'use strict';

const squareSum = require('./squareAndSum.js');

describe('when a group of numbers are passed into the function', () => {
    it('squares the numbers and then adds the newly squared numbers together to form one number', () => {
        expect(squareSum([1, 2, 3])).toEqual(14);
    });
});