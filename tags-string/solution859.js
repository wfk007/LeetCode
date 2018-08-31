//Buddy Strings
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    var diffNum = 0,
        diffArr = [],
        set = new Set();

    if (A.length !== B.length) {
        return false
    }
    if (A === B) {
        for (var j = 0; j < A.length; j++) {
            set.add(A[j])
        }
        return A.length > set.size
    }

    for (var i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diffArr.push(i)
            diffNum++
        }
    }
    if (diffNum === 2 && A[diffArr[0]] === B[diffArr[1]] && A[diffArr[1]] === B[diffArr[0]]) {
        return true
    } else {
        return false
    }
};
console.log(buddyStrings("ab", "ab"))
