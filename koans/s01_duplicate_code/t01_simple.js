const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('01 - simple', () => {
    it('works', () => {
        expect(2 + 2).to.eq(4);
    });
});
