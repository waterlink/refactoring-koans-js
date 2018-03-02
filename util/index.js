const code = require('../koans/s01_duplicate_code/t03_sum');

module.exports.t03_stillPreparing = () => {
    return !code.sum.toString().includes('code.aggregate(') &&
        !code.prod.toString().includes('code.aggregate(');
};