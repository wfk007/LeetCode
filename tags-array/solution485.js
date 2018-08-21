//Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    //最长公共子序列相似的问题
    var max = 0,
        currentMax = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentMax++;
            max = currentMax > max ? currentMax : max
        } else {
            currentMax = 0;
        }
    }
    return max
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
