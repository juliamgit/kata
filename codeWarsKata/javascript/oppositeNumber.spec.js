'use strict';

const oppositeNumber = require('./oppositeNumber.js');

describe('when a given number is inputted', function () {
    it('returns the opposite negative number when given a positive', function () {
        expect(oppositeNumber.opposite(14)).toEqual(-14);
    });
    it('returns the opposite positive number when given a negative', function () {
        expect(oppositeNumber.opposite(-34)).toEqual(34);
    });
    it('returns a negative 0 when using 0 as an edge case', function () {
        expect(oppositeNumber.opposite(0)).toEqual(-0);
    });
});

describe('when a given number is inputted', function () {
    it('returns the opposite negative number when given a positive number', function () {
        expect(oppositeNumber.oppositeB(3)).toEqual(-3);
    });
    it('returns the opposite positive number when given a negative number', function () {
        expect(oppositeNumber.oppositeB(-5)).toEqual(5);
    });
    it('returns a negative 0 when given 0', function () {
        expect(oppositeNumber.oppositeB(0)).toEqual(-0);
    });
});