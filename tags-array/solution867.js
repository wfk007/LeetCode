//Transpose Matrix
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    var resArr = [],
        tmpArr = [];
    for (var j = 0; j < A[0].length; j++) {
        tmpArr = []
        for (var i = 0; i < A.length; i++) {
            tmpArr.push(A[i][j])
        }
        resArr.push(tmpArr)
    }
    return resArr
};
transpose([[1, 2, 3], [4, 5, 6]])
