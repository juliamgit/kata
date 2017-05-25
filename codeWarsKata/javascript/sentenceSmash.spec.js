'use strict';

const smash = require('./sentenceSmash.js');

describe('when given an array of words', () => {
    it('smashes the words together to form a sentence', () => {
        expect(smash(["hello", "world"])).toEqual("hello world");
    });
    it('does not put a space at the beginning or end when given only one element', () => {
        expect(smash(["hello"])).toEqual("hello");
    });
    it('returns an empty string when given an empty array', () => {
        expect(smash([])).toEqual("");
    });
});

