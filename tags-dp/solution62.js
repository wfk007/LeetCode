//Unique Paths
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var dp = [],
        i, j,
        dp1, dp2;
    //初始化二维数组
    for (i = 0; i < m; i++) {
        dp[i] = []
        for (j = 0; j < n; j++) {
            if ((i === 0 && j === 1) || (i === 1 && j === 0) || (i === 0 && j === 0)) {
                dp[i][j] = 1
            } else if (i === 1 && j === 1) {
                dp[i][j] = 2
            } else {
                dp[i][j] = 0
            }
        }
    }

    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (i > 1 || j > 1) {
                if (i === 0) {
                    dp1 = 0
                } else {
                    dp1 = dp[i - 1][j]
                }
                if (j === 0) {
                    dp2 = 0
                } else {
                    dp2 = dp[i][j - 1]
                }
                dp[i][j] = dp1 + dp2
            }
        }
    }
    return dp[m - 1][n - 1]
};
// console.log(uniquePaths(23, 12))
//193536720
// console.log(uniquePaths(23, 12))
function uniquePaths1(m, n) {
    return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1))
}

function factorial(x) {
    var res = 1;
    for (var i = 1; i <= x; i++) {
        res *= i
    }
    return res
}
console.log(uniquePaths1(23, 12))
