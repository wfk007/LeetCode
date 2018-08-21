//Find All Numbers Disappeared in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    //数据特殊一定要从数组下标做文章
    var res = []
    for (var i = 0; i < nums.length; i++) {
        var index = Math.abs(nums[i]) - 1
        if (nums[index] > 0) {
            nums[index] = -nums[index]
        }
    }
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] > 0) {
            res.push(j + 1)
        }
    }
    return res
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
