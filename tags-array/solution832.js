//Flipping an Image
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    var tmpArr = [],
        resArr = [];
    for (var i = 0; i < A.length; i++) {
        //A[i]
        tmpArr = []
        for (var j = A[i].length - 1; j >= 0; j--) {
            if (A[i][j] === 0) {
                tmpArr.push(1)
            } else {
                tmpArr.push(0)
            }
        }
        resArr.push(tmpArr)
    }
    return resArr
};
flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])
