//Positions of Large Groups
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    var arr = S.split(''),
        baseValue = arr[0],
        startIndex = 0,
        resArr = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== baseValue) {
            if (i - 1 >= 0 && i - startIndex >= 3) {
                resArr.push([startIndex, i - 1])
            }
            baseValue = arr[i];
            startIndex = i;
        }
    }
    if (i - 1 >= 0 && i - startIndex >= 3) {
        resArr.push([startIndex, i - 1])
    }
    return resArr
};
// console.log(largeGroupPositions("abbxxxxzzy"))
largeGroupPositions("bcaaa")
