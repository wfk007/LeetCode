//Largest Number At Least Twice of Others
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    var max = nums[0],
        maxItemIndex = 0;

    //找到最大值和其下标
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            maxItemIndex = i;
        }
    }
    for (var j = 0; j < nums.length; j++) {
        if (j !== maxItemIndex) {
            if (nums[j] * 2 > max) {
                return -1
            }
        }
    }
    return maxItemIndex
};
console.log(dominantIndex([1,2,3,4]))
