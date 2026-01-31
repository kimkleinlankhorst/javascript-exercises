function filterRange(arr, min, max) {
    const arrAboveMin = arr.filter((currentNum) => currentNum >= min)
    const arrBelowMax = arrAboveMin.filter((currentNum) => currentNum <= max);
    return arrBelowMax
}

module.exports = {
    filterRange
}