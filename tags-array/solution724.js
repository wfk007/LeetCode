//Find Pivot Index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    var resIndex = -1;
    for (var i = 0; i < nums.length; i++) {
        if (equals(nums, i)) {
            return i
        }
    }
    return resIndex
};

function equals(nums, i) {
    //[0,i-1],[i+1,num.length-1]
    var leftSum = 0,
        rightSum = 0;
    for (var m = 0; m < i; m++) {
        leftSum += nums[m]
    }
    for (var n = i + 1; n < nums.length; n++) {
        rightSum += nums[n]
    }
    if (leftSum === rightSum) {
        return true
    } else {
        return false
    }
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
