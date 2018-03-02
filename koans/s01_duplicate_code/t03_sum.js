const code = {
    sum(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    },

    prod(n) {
        let prod = 1;
        for (let i = 2; i <= n; i++) {
            prod *= i;
        }
        return prod;
    },
};

module.exports = code;