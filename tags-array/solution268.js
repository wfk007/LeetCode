//Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var res = []
    for (var i = 0; i < nums.length; i++) {
        res[nums[i]] = 1;
    }
    //处理这组数当中缺少最大和最小的情况
    if(res.length != nums.length+1){
        if(!res[0]) {
            return 0
        }else{
            return res.length
        }
    }

    for (var j = 0; j < res.length; j++) {
        if (res[j] !== 1) {
            return j
        }
    }
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
