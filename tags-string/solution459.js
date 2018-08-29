//Repeated Substring Pattern
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    var model, quotient;
    //长度为 1 可以
    if (s.length === 1) {
        return false
    }
    for (var i = 0; i < s.length / 2; i++) {
        model = s.length % (i + 1)
        quotient = s.length / (i + 1)

        if (model === 0) {
            //重复“商”次，判断和原字符串是否相等
            if (s.substring(0, i + 1).repeat(quotient) === s) {
                return true
            }
        }
    }
    return false
};
console.log(repeatedSubstringPattern("a"))
