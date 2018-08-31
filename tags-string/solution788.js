//Rotated Digits
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    // var mapping = [0, 1, 5, -1, -1, 2, 9, -1, 8, 6]
    var res = 0,
        str = '',
        flag = false;
    for (var i = 1; i <= N; i++) {
        str = i.toString()
        flag = false
        for (var j = 0; j < str.length; j++) {
            if (str[j] === '3' || str[j] === '4' || str[j] === '7') {
                break;
            }
            if (str[j] === '2' || str[j] === '5' || str[j] === '6' || str[j] === '9') {
                flag = true
            }
        }
        if (j === str.length && flag) {
            res++
        }
    }
    return res
};
console.log(rotatedDigits(10))
// 857
// Output:
// 654
// Expected:
// 247
