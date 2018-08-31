//Reverse String II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    var arr = s.split(''),
        rightIndex,
        tmp;
    for (var i = 0; i < s.length; i += 2 * k) {
        rightIndex = i + k - 1 >= s.length ? s.length - 1 : i + k - 1
        //reverse [i,rightIndex]
        for (var j = i; j < rightIndex; j++, rightIndex--) {
            tmp = arr[j]
            arr[j] = arr[rightIndex]
            arr[rightIndex] = tmp
        }
    }
    return arr.join('')
};
console.log(reverseStr("abcdefghij",3))
