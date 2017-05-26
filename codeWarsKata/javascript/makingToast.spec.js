'use strict';

const sixToast = require('./makingToast.js');

describe('when any number is passed into the function', () => {
    it('tells you the difference between that number and the optimum of 6 toast', () => {
        expect(sixToast(5)).toEqual(1);
        expect(sixToast(6)).toEqual(0);
        expect(sixToast(12)).toEqual(6);
    });
});
