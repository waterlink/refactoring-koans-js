const {expect} = require('chai');
const {ownerOf} = require('../../util');

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

    xdescribe('extract method initial value for result as a method', () => {
        it('summer.aggregate uses initial value method', () => {
            expect(summer.aggregate.toString()).to.not.include('result = 0');
            expect(summer.aggregate.toString()).to.include('result = this.getInitialValue()');
        });

        it('producter.aggregate uses initial value method', () => {
            expect(producter.aggregate.toString()).to.not.include('result = 1');
            expect(producter.aggregate.toString()).to.include('result = this.getInitialValue()');
        });
    });

    xdescribe('replace initial loop index value using initial value method', () => {
        it('summer.aggregate does not hard-code initial loop index', () => {
            expect(summer.aggregate.toString()).to.not.include('i = 0');
            expect(summer.aggregate.toString()).to.not.include('i = 1');
        });

        it('producter.aggregate does not hard-code initial loop index', () => {
            expect(producter.aggregate.toString()).to.not.include('i = 1');
            expect(producter.aggregate.toString()).to.not.include('i = 2');
        });
    });

    xdescribe('extract aggregate function as a method', () => {
        it('summer.aggregate does not use +', () => {
            expect(summer.aggregate.toString()
                .replace('++', '')
                .replace('this.getInitialValue() + 1', ''))
                .to.not.include('+');

            expect(summer.aggregate.toString()).to.include('result = this.aggregateFunction(');
        });

        it('producter.aggregate does not use *', () => {
            expect(producter.aggregate.toString()).to.not.include('*');
            expect(producter.aggregate.toString()).to.include('result = this.aggregateFunction(');
        });

        it('summer.aggregate and producter.aggregate are identical', () => {
            expect(summer.aggregate.toString())
                .to.eq(producter.aggregate.toString());
        });
    });

    xdescribe('extract aggregator base class', () => {
        it('summer.aggregate is implemented on the base class', () => {
            expect(ownerOf(summer, 'aggregate')).to.not.eq('Summer');
            expect(ownerOf(summer, 'aggregate')).to.not.eq('Producter');
        });

        it('producter.aggregate is implemented on the base class', () => {
            expect(ownerOf(producter, 'aggregate')).to.not.eq('Summer');
            expect(ownerOf(producter, 'aggregate')).to.not.eq('Producter');
        });
    });
});