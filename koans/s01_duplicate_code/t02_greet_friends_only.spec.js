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
});