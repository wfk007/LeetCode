/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    for (var i = 1; i <= k; i++) {
        nums.unshift(nums.pop())
    }
};
var arr = [-1, -100, 3, 99]
rotate(arr, 2)
console.log(arr)
