// Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var majorityValue = -1,
        map = new Map(),
        maxCount = 0;
    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1)
        }else{
            map.set(nums[i], 1)
        }
        if (map.get(nums[i]) > maxCount) {
            maxCount = map.get(nums[i])
            majorityValue = nums[i]
        }
    }
    return majorityValue
};
console.log(majorityElement([1]))
