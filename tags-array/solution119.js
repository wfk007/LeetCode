//Pascal's Triangle II
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1]
    } else if (rowIndex === 1) {
        return [1, 1]
    } else {
        var arr = getRow(rowIndex - 1)
        var res = [1];
        for (var i = 0; i < arr.length - 1; i++) {
            res[i + 1] = arr[i] + arr[i + 1]
        }
        res.push(1)
        return res
    }
};
