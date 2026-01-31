const sumAll = function (int1, int2) {
    if (!Number.isInteger(int1) || !Number.isInteger(int2) || int1 < 0 || int2 < 0) {
        return 'ERROR';
    }

    var totalSum = 0;

    if (int1 == int2) {
        totalSum = int1;
    } else if (int1 < int2) {
        for (let i = int1; i <= int2; i++) {
            totalSum += i;
        }
    } else {
        for (let i = int2; i <= int1; i++) {
            totalSum += i;
        }
    }

    return totalSum

};

// Do not edit below this line
module.exports = sumAll;
