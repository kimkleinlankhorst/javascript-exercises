function camelize(inputString) {
    const wordArray = inputString.split("-");
    const camelizedWords = wordArray.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))

    return camelizedWords.join('');
}

module.exports = {
    camelize
}