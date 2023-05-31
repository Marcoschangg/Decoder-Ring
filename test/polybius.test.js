// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius testing", () => {
    describe("Encoding edge cases", () => {
        it("should return '42' for 'i'", () => {
            const expected = '42';
            const actual = polybius('i');
            expect(expected).to.equal(actual);
        });
        it("should return '42' for 'j'", () => {
            const expected = '42';
            const actual = polybius('j');
            expect(expected).to.equal(actual);
        });
        it("should return '11' for 'a'", () => {
            const expected = '11';
            const actual = polybius('a');
            expect(expected).to.equal(actual);
        });
        it("should return '55' for 'z'", () => {
            const expected = '55';
            const actual = polybius('z');
            expect(expected).to.equal(actual);
        });
    });
    describe("Encoding for normal cases", () => {
        it("should return '112131' for 'abc'", () => {
            const expected = '112131';
            const actual = polybius('abc');
            expect(expected).to.equal(actual);
        });
        it("should return '423542' for 'ixj'", () => {
            const expected = '423542';
            const actual = polybius('ixj');
            expect(expected).to.equal(actual);
        });
    });
    describe("Decoding for edge cases", () => {
        it("should return '(i/j)' for '42'", () =>{
            const expected = '(i/j)';
            const actual = polybius('42', false);
            expect(expected).to.equal(actual);
        });
        it("should return 'a' for '11'", () => {
            const expected = 'a';
            const actual = polybius('11', false);
            expect(expected).to.equal(actual);
        });
        it("should return 'z' for '55'", () => {
            const expected = 'z';
            const actual = polybius('55', false);
            expect(expected).to.equal(actual);
        });
    });
    describe("Decoding for normal cases", () => {
        it("should return 'abc' for '112131'", () => {
            const expected = 'abc';
            const actual = polybius('112131', false);
            expect(expected).to.equal(actual);
        });
        it("should return 'fgh z y' for '122232 55 45'", () => {
            const expected = 'fgh z y';
            const actual = polybius('122232 55 45', false);
            expect(expected).to.equal(actual);
        });
    });
    describe("Decoding for error cases", () => {
        it("should return false for odd number of total length without spaces", () => {
            expect(polybius("123 87", false)).to.be.false;
        });
        it("should return false for odd number of length for each input", () => {
            expect(polybius("123 877", false)).to.be.false;
        });
    });
});