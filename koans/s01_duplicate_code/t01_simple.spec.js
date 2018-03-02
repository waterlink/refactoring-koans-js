const {describe, it} = require('mocha');
const {expect} = require('chai');

const code = require('./t01_simple');
const greetMike = code.greetMike;
const greetMaria = code.greetMaria;

describe('01 - simple', () => {
    it('greets maria', () => {
        expect(greetMaria()).to.eq('Hello Maria');
    });

    it('greets maria', () => {
        expect(greetMike()).to.eq('Hello Mike');
    });

    describe('extract magic string duplication', () => {
        it('is extracted', () => {
            expect(code['greeting']).to.eq('Hello');
        });
    });
});
