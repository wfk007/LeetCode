//Array Partition I
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    var res = 0;
    if (!nums || nums.length === 0) {
        return 0;
    }
    nums.sort((a, b) => a - b)
    for (var i = 0; i < nums.length; i += 2) {
        res += nums[i]
    }
    return res
};
console.log(arrayPairSum([6214, -2290, 2833, -7908]))
