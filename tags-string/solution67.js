//Add Binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    //return (Number.parseInt(a,2)+Number.parseInt(b,2)).toString(2)
    var carry = 0,
        base = 0,
        i, j,
        res = [],
        current,
        leftStr = ''; //剩余的字符串
    for (i = a.length - 1, j = b.length - 1; i >= 0 && j >= 0; i--, j--) {
        current = Number(a[i]) + Number(b[j]) + carry
        carry = Math.floor(current / 2)
        base = current % 2
        res.unshift(base)
    }

    if (i < 0 && j < 0) {
        if (carry === 1) {
            res.unshift(carry)
        }
        return res.join('')
    } else {
        if (i >= 0) {
            leftStr = a.substring(0, i + 1)
        } else {
            leftStr = b.substring(0, j + 1)
        }

        if (carry === 1) {
            for (var k = leftStr.length - 1; k >= 0; k--) {
                current = Number(leftStr[k]) + Number(carry)
                carry = Math.floor(current / 2)
                base = current % 2
                res.unshift(base)
            }
            if (carry === 1) {
                res.unshift(carry)
            }
            return res.join('')
        } else {
            return leftStr.concat(res.join(''))
        }
    }
};
console.log(addBinary('11', '1'))
