/**
 * Created by julia.harper on 3/24/17.
 */
'use strict';

const addArray = require('./sumArray.js');

describe('Test', function(){
    it('Basic Tests', function() {
        expect(addArray([])).toEqual(0);
        expect(addArray([1, 5.2, 4, 0, -1])).toEqual(9.2);
    });

});
