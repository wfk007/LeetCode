//Fair Candy Swap
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    var sumA = 0,
        sumB = 0,
        setA = new Set(),
        setB = new Set(),
        itemB;

    for (var i = 0; i < A.length; i++) {
        sumA += A[i]
        setA.add(A[i])
    }
    for (var j = 0; j < B.length; j++) {
        sumB += B[j]
        setB.add(B[j])
    }

    for (var values of setA.values()) {
        itemB = (2 * values + sumB - sumA) / 2
        if (setB.has(itemB)) {
            return [values, itemB]
        }
    }
};
console.log(fairCandySwap([1,2,5], [2,4]))
