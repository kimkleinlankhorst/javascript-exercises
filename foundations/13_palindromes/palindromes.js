const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedArray = word
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversedArray = cleanedArray.split('').reverse().join('');

    return cleanedArray === reversedArray;

};

// Do not edit below this line
module.exports = palindromes;
