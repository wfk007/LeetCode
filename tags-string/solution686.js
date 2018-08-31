//Repeated String Match
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
    for (var i = 1;i<=A.length; i++) {
        if(A.repeat(i).includes(B)){
            return i
        }
    }
    return -1
};
console.log(repeatedStringMatch("a","aa"))
