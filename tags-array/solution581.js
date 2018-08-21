//Shortest Unsorted Continuous Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    var clone = nums.slice(0);
    clone.sort((a, b) => a - b)

    var start = clone.length,
        end = 0;
    for (var i = 0; i < clone.length; i++) {
        if (clone[i] != nums[i]) {
            start = Math.min(start, i);
            end = Math.max(end, i);
        }
    }
    return (end - start >= 0 ? end - start + 1 : 0);
};
console.log(findUnsortedSubarray([1, 2, 4, 5, 3]))
