//House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    /**
     * 基于子问题和子问题之间的关系
     * f(1) = nums[0]
     * f(2) = max(nums[0],nums[1])
     * f(k) = max(f(k-1),f(k-2)+nums[k])
     */
    if (!nums || nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }

    var f1 = nums[0],
        f2 = Math.max(nums[0], nums[1]),
        res;

    for (var i = 2; i < nums.length; i++) {
        res = Math.max(f2, f1 + nums[i])
        f1 = f2
        f2 = res
    }
    return res
};
console.log(rob([2, 7, 9, 3, 1]))
