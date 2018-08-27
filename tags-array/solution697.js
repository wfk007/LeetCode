//Degree of an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    var
        max = 0, //最大值
        indexMap = new Map(), //由最大下标组成的哈希表
        frequency = [], //由下标组成的数组
        i,
        j,
        shortestLength;

    //找最大值
    for (i = 0; i < nums.length; i++) {
        if (!frequency[nums[i]]) {
            frequency[nums[i]] = 1;
        } else {
            frequency[nums[i]]++
        }
        max = Math.max(max, frequency[nums[i]])
    }
    //找出现频率最多的数字
    for (i = 0; i < frequency.length; i++) {
        if (frequency[i] === max) {
            indexMap.set(i, max)
        }
    }
    var size = indexMap.size;
    //确定最小距离
    for (var k = 1; k <= size; k++) {
        i = 0;
        j = nums.length - 1;
        while (i < j && !indexMap.has(nums[i])) {
            i++
        }
        while (i < j && nums[j]!==nums[i]) {
            j--
        }
        if (k === 1) {
            shortestLength = j - i + 1
        } else {
            shortestLength = Math.min(shortestLength, j - i + 1)
        }
        indexMap.delete(nums[i])
    }
    return shortestLength
};
console.log(findShortestSubArray([1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]))
