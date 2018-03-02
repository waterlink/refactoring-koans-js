const {expect} = require('chai');

const code = require('./t01_simple');
const greetMike = code.greetMike;
const greetMaria = code.greetMaria;

describe('01 - simple', () => {
    it('greets Maria', () => {
        expect(greetMaria()).to.eq('Hello Maria');
    });

    it('greets Mike', () => {
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

    xdescribe('extract duplication as a function', () => {
        it('is extracted as function greetPerson', () => {
            expect(code['greetByName']('Name')).to.eq('Hello Name');
            expect(code['greetByName']('Other')).to.eq('Hello Other');
        });

        it('is used by greetMaria', () => {
            expect(greetMaria.toString()).to.include('return code.greetByName(');
        });

        it('is used by greetMike', () => {
            expect(greetMike.toString()).to.include('return code.greetByName(');
        });

        it('is still using greeting field', () => {
            expect(code['greetByName'].toString()).to.not.include('Hello');
        });
    });
});
