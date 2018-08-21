//Maximum Average Subarray I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    var max = Number.MIN_SAFE_INTEGER,
        currentMax = 0;
    for (var i = 0; i <= nums.length - k; i++) {
        currentMax = 0;
        for (var j = i; j < i + k; j++) {
            currentMax += nums[j]
        }
        max = currentMax > max ? currentMax : max
    }
    return max / k
};
console.log(findMaxAverage([-1], 1))
