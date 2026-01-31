const reverseString = function (str) {
    var reversedStr = "";
    const lastIndex = str.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
