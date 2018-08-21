//Reshape the Matrix
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    var res = [],
        m = 0,
        n = 0,
        tmp = [];
    if (nums.length * nums[0].length !== r * c) {
        return nums
    } else {
        for (var i = 0; i < r; i++) {
            tmp = []
            for (var j = 0; j < c; j++) {
                tmp.push(nums[m][n])
                if (n < nums[0].length-1) {
                    n++
                } else {
                    n = 0
                    m++
                }
            }
            res.push(tmp)
        }
    }
    return res
};
console.log(matrixReshape([[1,2],[3,4]],1,4))
