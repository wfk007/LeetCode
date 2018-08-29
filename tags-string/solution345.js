//Reverse Vowels of a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var vowels = 'aeiouAEIOU',
        tmp = '',
        arr = s.split('');

    for (var i = 0, j = arr.length - 1; i < j;) {
        while (i < j && !vowels.includes(arr[i])) {
            i++
        }
        while (i < j && !vowels.includes(arr[j])) {
            j--
        }
        //交换 arr[i] 和 arr[j]
        if (i < j) {
            tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
            i++
            j--
        }
    }
    return arr.join('')
};
console.log(reverseVowels("leetcode"))
