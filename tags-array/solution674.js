//Longest Continuous Increasing Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    var maxLength = 1,
        currentLength = 1;
    if (!nums || nums.length === 0) {
        return 0;
    }
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            currentLength++;
        } else {
            maxLength = currentLength > maxLength ? currentLength : maxLength
            currentLength = 1
        }
    }
    return maxLength > currentLength ? maxLength : currentLength
};
console.log(findLengthOfLCIS([7,2,3,4,5]))
