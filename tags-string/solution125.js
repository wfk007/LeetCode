//Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 0) {
        return true
    }
    var arr = s.split('').filter(ele => {
        return (ele >= 'a' && ele <= 'z') || (ele >= 'A' && ele <= 'Z') || (ele >= '0' && ele <= 9)
    })
    for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i].toLowerCase() !== arr[j].toLowerCase()) {
            break;
        }
    }
    if (i < j) {
        return false
    } else {
        return true
    }
};
console.log(isPalindrome("0P"))
