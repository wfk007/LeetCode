//Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s.length === 0) {
        return 0
    }

    var left = Number.MIN_VALUE,
        right = Number.MAX_VALUE,
        flag = false;

    for (var i = s.length - 1; i >= 0; i--) {
        if (!flag) {
            if (s[i] !== ' ') {
                right = i
                flag = true
            }
        } else {
            if (s[i] === ' ') {
                left = i;
                break;
            }
        }
    }
    if (right === Number.MAX_VALUE) {
        return 0
    } else {
        if (left === Number.MIN_VALUE) {
            return right + 1
        } else {
            return right - left
        }
    }
};
console.log(lengthOfLastWord("hello"))
