'use strict';

const repeatStr = require("./stringRepeat.js");

describe("Tests", function() {
    it ("Basic tests", function() {
        expect(repeatStr(3, "*")).toEqual("***");
        expect(repeatStr(5, "#")).toEqual("#####");
        expect(repeatStr(2, "ha ")).toEqual("ha ha ");
    });
});