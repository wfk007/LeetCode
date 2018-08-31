//Unique Paths II
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var dp = [],
        i, j,
        dp1, dp2;
    if (obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]) {
        return 0
    }
    //初始化二维数组
    for (i = 0; i < obstacleGrid.length; i++) {
        dp[i] = []
        for (j = 0; j < obstacleGrid[0].length; j++) {
            dp[i][j] = 0
        }
    }

    //basecase 赋值：
    if (obstacleGrid[0][0] === 0) {
        dp[0][0] = 1
    } else {
        dp[0][0] = 0
    }

    for (i = 0; i < obstacleGrid.length; i++) {
        for (j = 0; j < obstacleGrid[0].length; j++) {
            if (i > 0 || j > 0) {
                if (i === 0 || obstacleGrid[i - 1][j]) {
                    dp1 = 0
                } else {
                    dp1 = dp[i - 1][j]
                }
                if (j === 0 || obstacleGrid[i][j - 1]) {
                    dp2 = 0
                } else {
                    dp2 = dp[i][j - 1]
                }
                dp[i][j] = dp1 + dp2
            }
        }
    }
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};
console.log(uniquePathsWithObstacles([[0, 1]]))
