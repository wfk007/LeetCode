//Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var value = target - nums[i];
        if (map.has(value)) {
            return [map.get(value), i]
        }
        map.set(nums[i], i)
    }
};
twoSum([2, 7, 11, 15], 9)


