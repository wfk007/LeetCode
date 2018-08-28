//Count and Say
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return '1'
    }
    var lastStr = '1'
    for (let i = 2; i <= n; i++) {
        var baseIndex = 0,
            base = lastStr[baseIndex],
            currentStr = '';
        for (var j = 0; j < lastStr.length; j++) {
            if (lastStr[j] !== base) {
                currentStr += j - baseIndex + '' + base
                baseIndex = j
                base = lastStr[baseIndex]
            }
        }
        currentStr += j - baseIndex + '' + base
        lastStr = currentStr;
    }
    return lastStr
};
console.log(countAndSay(6))
