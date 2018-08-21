//Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m)
    var j = 0;
    for (var i = 0; i < nums2.length; i++) {
        while (j < nums1.length) {
            if (nums1[j] > nums2[i]) {
                //放在j-1的位置，下次循环j的初始值为当前值
                break;
            }
            j++
        }
        nums1.splice(j, 0, nums2[i]);
    }
};
