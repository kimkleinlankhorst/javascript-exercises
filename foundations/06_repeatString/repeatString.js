const repeatString = function (str, repeatNr) {
    outputString = '';

    if (repeatNr < 0) {
        outputString = 'ERROR';
    } else {
        for (let i = 0; i < repeatNr; i++) {
            outputString += str;
        }
    }

    return outputString;

};

// Do not edit below this line
module.exports = repeatString;
