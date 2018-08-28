//Implement strStr()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    var index = -1,
        j;
    if (needle === '') {
        return 0
    }
    //在 haystack 中找到第一个等于 needle 的字符
    for (var i = 0; i < haystack.length; i++) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            j = 1
            while (j < needle.length && i + j < haystack.length && haystack[i + j] === needle.charAt(j)) {
                j++
            }
            if (j === needle.length) {
                return i
            }
        }
    }
    return -1
};
console.log(strStr("aaaaa",'a'))
