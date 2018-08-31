//Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }

    var sum1 = 1,
        sum2 = 2,
        sum = 0;
    for (var i = 3; i <= n; i++) {
        sum = sum1 + sum2
        sum1 = sum2
        sum2 = sum
    }

    return sum
};
console.log(climbStairs(45))
//1836311903
