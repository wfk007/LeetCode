//Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var n = nums.length
    for (var i = 0; i < n; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0);
            i--;
            n--;
        }
    }
};
var arr = [0, 1, 0, 3, 12]
moveZeroes(arr)
console.log(arr)
