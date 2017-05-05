'use strict';

const myFirstKata = require("./fixTheBugs.js");

describe("Tests", function(){
    it ("Basic tests", function() {
        expect(myFirstKata(3, 5)).toEqual((3 % 5) + (5 % 3));
        expect(myFirstKata("hello", 3)).toEqual(false);
        expect(myFirstKata(67, "bye")).toEqual(false);
        expect(myFirstKata(true, true)).toEqual(false);
        expect(myFirstKata(314, 107)).toEqual((107 % 314) + (314 % 107));
        expect(myFirstKata(19483, 9)).toEqual((9 % 19483) + (19483 % 9));

    });
});
