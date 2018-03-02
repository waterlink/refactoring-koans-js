const {expect} = require('chai');

const code = require('./t04_oo_sum');
const {Summer, Producter} = code;

const summer = new Summer();
const producter = new Producter();

describe('04 - object-oriented sum', () => {
    it('sum of 0 to 0 is 0', () => {
        expect(summer.aggregate(0)).to.eq(0);
    });

    it('sum of 0 to 1 is 1', () => {
        expect(summer.aggregate(1)).to.eq(1);
    });

    it('sum of 0 to 9 is 45', () => {
        expect(summer.aggregate(9)).to.eq(45);
    });

    it('prod of 1 to 1 is 1', () => {
        expect(producter.aggregate(1)).to.eq(1);
    });

    it('prod of 1 to 2 is 2', () => {
        expect(producter.aggregate(2)).to.eq(2);
    });

    it('prod of 1 to 9 is 362.880', () => {
        expect(producter.aggregate(9)).to.eq(362880);
    });
});