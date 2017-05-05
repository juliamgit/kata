'use strict';

const calculate = require('./calculate.js');

describe('Tests', function () {
    it('test', function () {
        expect(calculate(2)).toEqual(8);
    });
    it('test', function () {
        expect(calculate(10)).toEqual(200);
    });
    it('test', function () {
        expect(calculate(5)).toEqual(50);
    });
});
