//K-diff Pairs in an Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    //这题和 Twosum 类似
    var sum = 0,
        map = new Map(),
        map1 = new Map();

    if (k < 0) {
        return 0;
    }
    for (var i = 0; i < nums.length; i++) {
        if (!map.has(nums[i]) || map1.get(nums[i]) < 2) {
            if (map.has(nums[i] - k) || map.has(nums[i] + k)) {
                sum++
                if (map1.has(nums[i])) {
                    map1.set(nums[i], map1.get(nums[i] + 1))
                } else {
                    map1.set(nums[i], 1)
                }
            }
            map.set(nums[i], i)
        } else {
            if (k === 0 && !map1.has(nums[i])) {
                map1.set(nums[i], 1)
                sum++;
            }
        }
    }
    return sum
};

console.log(findPairs([1, 1, 1, 1, 1], 0))
