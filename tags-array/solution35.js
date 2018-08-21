//Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//     return dichotomy(nums, target, 0, nums.length - 1)
// };

// function dichotomy(nums, target, start, end) {
//     var middle = Math.floor((end + start) / 2)
//     if (start < end) {
//         if (nums[middle] === target) {
//             return middle;
//         }
//         if (nums[middle] > target) {
//             return dichotomy(nums, target, 0, middle - 1);
//         }
//         if (nums[middle] < target) {
//             return dichotomy(nums, target, middle + 1, end)
//         }
//     } else {
//         if (nums[start] < target) {
//             return start + 1
//         } else if (nums[start] > target) {
//             if (start === 0) {
//                 return 0
//             } else {
//                 return start
//             }
//         } else {
//             return start
//         }
//     }
// }


var searchInsert = function (nums, target) {
    var start = 0,
        end = nums.length - 1;
    while (start <= end) {
        var middle = Math.floor((start + end) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return start
};

console.log(searchInsert([1, 3, 5, 6], 0))
