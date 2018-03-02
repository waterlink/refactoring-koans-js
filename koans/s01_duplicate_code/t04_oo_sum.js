class Summer {
    aggregate(n) {
        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += i;
        }
        return result;
    }
}

module.exports.Summer = Summer;

class Producter {
    aggregate(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

module.exports.Producter = Producter;