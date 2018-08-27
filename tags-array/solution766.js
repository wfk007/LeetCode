//Toeplitz Matrix
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    var currentFlag,
        baseValue,
        m = matrix.length - 2, //初始值
        n = 0;

    while (m >= 0 && m < matrix.length - 1 && n >= 0 && n < matrix[0].length - 1) {
        currentFlag = true //记录当前状态
        baseValue = matrix[m][n] //基准值
        i = m
        j = n
        while (i < matrix.length && j < matrix[0].length) {
            if (matrix[i][j] !== baseValue) {
                currentFlag = false;
                break;
            }
            i++;
            j++;
        }
        if (!currentFlag) {
            return false
        } else {
            if (m > 0) {
                m--
            } else {
                n++
            }
        }
    }
    return true
};
var matrix = [
    [1, 2],
    [2, 2]
]
console.log(isToeplitzMatrix(matrix))
