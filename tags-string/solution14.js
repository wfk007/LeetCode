//Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var index = 0,
        flag = true,
        current,
        resStr = '';
    if (strs.length === 0) {
        return resStr
    }
    for (var index = 0;; index++) {
        if (index >= strs[0].length) {
            break;
        }
        current = strs[0].charAt(index)
        for (var i = 1; i < strs.length; i++) {
            if (strs[i].charAt(index) !== current) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            break;
        } else {
            resStr += current
        }
    }
    return resStr
};
console.log(longestCommonPrefix([]))
