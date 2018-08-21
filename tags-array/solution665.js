//Non-decreasing Array
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    var count = 0,
        index = 0;

    for (var i = 0; i < nums.length - 1; i++) {
        if (count > 1) {
            break;
        }
        if (nums[i] > nums[i + 1]) {
            index = i;
            count++
        }
    }
    if (count > 1) {
        return false
    } else {
        if (index === 0 || index === nums.length - 2 || nums[index - 1] <= nums[index + 1] || nums[index] <= nums[index + 2]) {
            return true
        } else {
            return false
        }
    }
};
console.log(checkPossibility([3, 2, 1]))
