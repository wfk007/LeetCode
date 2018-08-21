//Maximum Subarray

//maxSubArray(A, i) = maxSubArray(A, i - 1) > 0 ? maxSubArray(A, i - 1) : 0 + A[i];
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    //
    var maxSubi = nums[0], //以i结尾的最长字串
        res = maxSubi; //结果

    for (var i = 1; i < nums.length; i++) {
        maxSubi = nums[i] + maxSubi > nums[i] ? nums[i] + maxSubi : nums[i]
        res = res < maxSubi ? maxSubi : res
    }
    return res
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
