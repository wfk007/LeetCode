//Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    const mapping = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    var arr = s.split(''),
        res = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'I') {
            if (i + 1 < arr.length && (arr[i + 1] === 'V' || arr[i + 1] === 'X')) {
                res += mapping[arr[i + 1]] - 1
                i++
            } else {
                res += mapping[arr[i]]
            }
        } else if (arr[i] === 'X') {
            if (i + 1 < arr.length && (arr[i + 1] === 'L' || arr[i + 1] === 'C')) {
                res += mapping[arr[i + 1]] - 10
                i++
            } else {
                res += mapping[arr[i]]
            }
        } else if (arr[i] === 'C') {
            if (i + 1 < arr.length && (arr[i + 1] === 'D' || arr[i + 1] === 'M')) {
                res += mapping[arr[i + 1]] - 100
                i++
            } else {
                res += mapping[arr[i]]
            }
        } else {
            res += mapping[arr[i]]
        }
    }
    return res
};

console.log(romanToInt("DXX"))
