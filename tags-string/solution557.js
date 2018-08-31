//Reverse Words in a String III
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"))
