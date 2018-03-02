const {expect} = require('chai');

const code = require('./t03_sum');
const sum = code.sum;
const prod = code.prod;

describe('03 - sum', () => {
    it('sum of 0 to 0 is 0', () => {
        expect(sum(0)).to.eq(0);
    });

    it('sum of 0 to 1 is 1', () => {
        expect(sum(1)).to.eq(1);
    });

    it('sum of 0 to 9 is 45', () => {
        expect(sum(9)).to.eq(45);
    });

    it('prod of 1 to 1 is 1', () => {
        expect(prod(1)).to.eq(1);
    });

    it('prod of 1 to 2 is 2', () => {
        expect(prod(2)).to.eq(2);
    });

    it('prod of 1 to 9 is 362.880', () => {
        expect(prod(9)).to.eq(362880);
    });
});