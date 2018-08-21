//Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var map = new Map()
    for (var i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i],1)
        }else{
            return true
        }
    }
    return false
};
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
