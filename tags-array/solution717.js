//1-bit and 2-bit Characters
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    if (bits.length === 1) {
        if (bits[0] === 0) {
            return true
        } else {
            return false
        }
    } else if (bits.length === 2) {
        if (bits[0] === 0 && bits[1] === 0) {
            return true
        } else {
            return false
        }
    } else {
        if (bits[bits.length - 1] === 1) {
            return false
        } else {
            return foo(bits, 0, bits.length - 2)
        }
    }
};

function foo(bits, i, j) {
    var res1 = false,
        res2 = false;
    if (j - i <= 1) {
        if ((j === i && bits[i] === 0) ||
            (j - i === 1 && bits[i] === 1) ||
            (j - i === 1 && bits[i] === 0 && bits[j] === 0)) {
            return true
        } else {
            return false
        }
    }

    if (bits[j] === 0) {
        res1 = foo(bits, i, j - 1)
    }

    if (bits[j - 1] === 1) {
        res2 = foo(bits, i, j - 2)
    }

    return res1 || res2
}
console.log(isOneBitCharacter([0, 0, 1, 0]))
