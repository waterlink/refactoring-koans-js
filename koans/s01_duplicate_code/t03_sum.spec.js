const {expect} = require('chai');
const {t03_stillPreparing} = require('../../util');

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

    if (t03_stillPreparing()) {
        describe('make both functions identical with few parameters', () => {
            xdescribe('make sum and prod use the variable with same name', () => {
                it('sum uses the variable result', () => {
                    expect(code.sum.toString()).to.include('let result =');
                    expect(code.sum.toString()).to.include('return result');
                    expect(code.sum.toString().replace('sum(n)', ''))
                        .to.not.include('sum');
                });

                it('prod uses the variable result', () => {
                    expect(code.prod.toString()).to.include('let result =');
                    expect(code.prod.toString()).to.include('return result');
                    expect(code.prod.toString().replace('prod(n)', ''))
                        .to.not.include('prod');
                });
            });

            xdescribe('extract initial value as a variable', () => {
                it('sum and prod uses initial value', () => {
                    expect(code.sum.toString()).to.include('let result = initialValue');
                    expect(code.prod.toString()).to.include('let result = initialValue');
                });
            });

            xdescribe('re-use initial value instead of hard-coded start loop value', () => {
                it('sum and prod does not hard-code initial value of the loop variable', () => {
                    expect(code.sum.toString()).to.not.include('let i = 1');
                    expect(code.prod.toString()).to.not.include('let i = 2');
                });
            });

            xdescribe('make *= and += parametrise-able by extracting functions add and mul', () => {
                it('sum uses add instead of +=', () => {
                    expect(code.sum.toString()
                        .replace('++', '')
                        .replace('initialValue + 1', ''))
                        .to.not.include('+');

                    expect(code['add'](2, 17)).to.eq(19);
                    expect(code['add'](14, 9)).to.eq(23);
                });

                it('prod uses mul instead of *=', () => {
                    expect(code.prod.toString()).to.not.include('*');

                    expect(code['mul'](2, 17)).to.eq(34);
                    expect(code['mul'](14, 9)).to.eq(126);
                });
            });

            xdescribe('parametrise the function add and mul in sum and prod respectively', () => {
                it('sum uses aggregateFunction', () => {
                    expect(code.sum.toString()).to.not.include('result = code.');
                    expect(code.sum.toString()).to.include('result = aggregateFunction(');
                });

                it('prod uses aggregateFunction', () => {
                    expect(code.prod.toString()).to.not.include('result = code.');
                    expect(code.prod.toString()).to.include('result = aggregateFunction(');
                });

                it('sum and prod are identical except for two variables at the top', () => {
                    const parseFunction = (fn) => {
                        return fn.toString()
                            .split('\n')
                            .map(l => l.trim())
                            .filter(l => l.length > 0)
                            .slice(3)
                            .join('\n');
                    };

                    const sumLines = parseFunction(code.sum);
                    const prodLines = parseFunction(code.prod);

                    expect(sumLines).to.deep.eq(prodLines);
                });
            });
        });
    }

    xdescribe('finally extract the duplicate code as a function', () => {
        it('sum uses aggregate function', () => {
            expect(code.sum.toString()).to.include('return code.aggregate(');
        });

        it('sum does not use any variables', () => {
            expect(code.sum.toString()).to.not.include('const');
            expect(code.sum.toString()).to.not.include('let');
            expect(code.sum.toString()).to.not.include('var');
        });

        it('prod uses aggregate function', () => {
            expect(code.prod.toString()).to.include('return code.aggregate(');
        });

        it('prod does not use any variables', () => {
            expect(code.prod.toString()).to.not.include('const');
            expect(code.prod.toString()).to.not.include('let');
            expect(code.prod.toString()).to.not.include('var');
        });
    });

});