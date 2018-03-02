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

    xdescribe('extract magic string duplication', () => {
        it('is extracted as field greeting', () => {
            expect(code['greeting']).to.eq('Hello');
        });

        it('is not mentioned in greetMaria', () => {
            expect(greetMaria.toString()).to.not.include('Hello');
        });

        it('is not mentioned in greetMike', () => {
            expect(greetMike.toString()).to.not.include('Hello');
        });
    });
});
