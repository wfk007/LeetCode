//Maximum Product of Three Numbers
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    var n = nums.length
    nums.sort((a, b) => a - b)
    if (nums[1] < 0) {
        if (nums[n - 1] * nums[n - 2] * nums[n - 3] > nums[n - 1] * nums[0] * nums[1]){
            return nums[n - 1] * nums[n - 2] * nums[n - 3]
        }else{
            return nums[n - 1] * nums[0] * nums[1]
        }

    } else {
        return nums[n - 1] * nums[n - 2] * nums[n - 3]
    }
};
console.log(maximumProduct([1,2,3,4]))
