const { filterRangeInPlace } = require('./ex3')

describe("filterRangeInPlace", () => {

    test("returns the filtered values", () => {

        let arr = [5, 3, 8, 1];

        filterRangeInPlace(arr, 2, 5);

        expect(arr).toEqual([5, 3]);
    });

    test("doesn't return anything", () => {
        expect.isUndefined(filterRangeInPlace([1, 2, 3], 1, 4));
    });

});