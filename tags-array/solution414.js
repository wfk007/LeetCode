//Third Maximum Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    var third = -1, //指向第三大
        second = -1, //指向第二大
        first = 0, //指向最大的
        count = 1;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[first]) {
            third = second;
            second = first;
            first = i;
            count++;
        } else if (nums[i] === nums[first] || nums[i] === nums[second] || nums[i] === nums[third]) {
            continue
        } else if ((nums[i] > nums[second] && nums[i] < nums[first]) || second < 0) {
            third = second;
            second = i;
            count++;
        } else if ((nums[i] > nums[third] && nums[i] < nums[second]) || third < 0) {
            third = i;
            count++;
        }
    }
    if (count < 3) {
        return nums[first]
    } else {
        return nums[third]
    }
};
console.log(thirdMax([2, 2, 3, 1]))
