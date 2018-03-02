const {expect} = require('chai');

const code = require('./t02_greet_friends_only');
const greet = code.greet;

describe('02 - greet friends only', () => {
    it('greets Amy because she is a friend', () => {
        expect(greet('Amy')).to.eq('Hello Amy!');
    });

    it('greets Bob because he is a friend', () => {
        expect(greet('Bob')).to.eq('Hello Bob!');
    });

    it('does not greet Sam because she is not a friend', () => {
        expect(greet('Sam')).to.eq('');
    });

    describe('use name parameter instead of hard-coding', () => {
        it('does not hard-code greeting to Amy or Bob', () => {
            expect(greet.toString()).to.not.include('Hello Amy');
            expect(greet.toString()).to.not.include('Hello Bob');
        });
    });

    describe('extract method for duplicated if body', () => {
        it('uses greetByName method instead of duplicating', () => {
            expect(greet.toString()).to.not.include('`Hello ${name}!`');
            expect(greet.toString()).to.include('return code.greetByName(name)');
        });
    });

    describe('consolidate conditional expression', () => {
        it('has only single if statement', () => {
            expect(greet.toString().match(/if/g)).to.have.length(1);
        });
    });

    describe('extract condition as a method', () => {
        it('has method isFriend', () => {
            expect(code['isFriend']('Amy')).to.eq(true);
            expect(code['isFriend']('Bob')).to.eq(true);
            expect(code['isFriend']('Sam')).to.eq(false);
            expect(code['isFriend']('Boris')).to.eq(false);
        });

        it('does not have a complex conditional', () => {
            expect(greet.toString()).to.not.include('||');
            expect(greet.toString()).to.not.include('==');
        });
    });

    describe('use appropriate data structure', () => {
        it('has field friends', () => {
            expect(code['friends']).to.deep.eq(['Amy', 'Bob']);
        });

        it('has simple conditional in isFriend method', () => {
            expect(code['isFriend'].toString()).to.not.include('||');
            expect(code['isFriend'].toString()).to.not.include('==');
        });
    });
});