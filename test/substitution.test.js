// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution Tests", () => {
    const alpha = [...Array(26)].map((ele, i) => String.fromCharCode(i + 97));
    let alphaRev = [...Array(26)].map((ele, i) => String.fromCharCode(i + 97)).reverse();
    describe("Encoding edge case tests", () => {
        it("should return 'z' for 'a'", () => {
            const expected = alphaRev[0];
            const actual = substitution("a", alphaRev);
            expect(expected).to.equal(actual);
        });
        it("should return 'a' for 'z'", () => {
            const expected = alphaRev[25];
            const actual = substitution("z", alphaRev);
            expect(expected).to.equal(actual);
        });
    });
    describe("Encoding normal case tests", () => {
        
        alphaRev = alphaRev.reverse().sort((a1, a2) => 0.5 - Math.random());
        let input = alpha[13] + alpha[20] + alpha[17];
        let ex = alphaRev[13] + alphaRev[20] + alphaRev[17];
        it(`should return '${ex}' for '${input}'`, () => expect(ex).to.equal(substitution(input, alphaRev)));
        
        alphaRev = alphaRev.sort((a1, a2) => 0.5 - Math.random());
        input = alpha[13] + alpha[20] + alpha[17];
        ex = alphaRev[13] + alphaRev[20] + alphaRev[17];
        it(`should return '${ex}' for '${input}'`, () => expect(ex).to.equal(substitution(input, alphaRev)));
        alphaRev = alphaRev.sort((a1, a2) => 0.5 - Math.random());
        input = alpha[13] + " " + alpha[20] + alpha[17];
        ex = alphaRev[13] + " " + alphaRev[20] + alphaRev[17];
        it(`should return '${ex}' for '${input}'`, () => expect(ex).to.equal(substitution(input, alphaRev)));
    });
    describe("Encoding error case tests", () => {
        it("Should return false for no alphabet input", () => {
            expect(substitution("a")).to.be.false;

        });
        it("Should return false for smaller alphabet input", () => {
            alphaRev = alpha.slice(2);
            let input = alpha[13] + " " + alpha[20] + alpha[17];
            expect(substitution(input, alphaRev)).to.be.false;
        });
        it("Should return false for not unique alphabet input", () => {
            alphaRev = [...Array(26)].map((ele, i) => String.fromCharCode(97));
            let input = alpha[13] + " " + alpha[20] + alpha[17];
            expect(substitution(input, alphaRev)).to.be.false;
        });
        
    });

});