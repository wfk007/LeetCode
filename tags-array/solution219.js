//Contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var map = new Map()
    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            //把 i 和 map 里面的值进行比较
            if (i - map.get(nums[i]) <= k) {
                return true
            } else {
                map.set(nums[i], i)
            }
        } else {
            map.set(nums[i], i)
        }
    }
    return false
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
