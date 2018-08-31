//Valid Palindrome II
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    //贪心
    return palindrome(s, 0, s.length - 1, count = 1)
};

function palindrome(s, i, j, count) {
    if (i < j) {
        if (s[i] === s[j]) {
            return palindrome(s, i + 1, j - 1, count)
        } else {
            if (count > 0) {
                return palindrome(s, i, j - 1, 0) || palindrome(s, i + 1, j, 0)
            } else {
                return false
            }
        }
    } else {
        return true
    }
}

console.log(validPalindrome('abca'))
