//Magic Squares In Grid
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    var sum = 0,
        set = new Set(),
        flag,
        rowSum1, //横
        rowSum2,
        rowSum3,
        columnSum1, //竖
        columnSum2,
        columnSum3,
        leftDiagonalSum, //左斜
        rightDiagonalSum; //右斜

    if (grid.length < 3) {
        return 0
    }
    //grid.length >=3
    for (var i = 0; i < grid.length - 2; i++) {
        for (var j = 0; j < grid[i].length - 2; j++) {
            set.clear()
            flag = false
            //以 grid[i][j]为左上角顶点的矩阵
            //判断是否存在重复元素
            for (m = i; m <= i + 2; m++) {
                for (n = j; n <= j + 2; n++) {
                    if (set.has(grid[m][n]) || grid[m][n] > 9 || grid[m][n] < 1) {
                        flag = true
                        break
                    } else {
                        set.add(grid[m][n])
                    }
                }
                if (flag) {
                    break;
                }
            }
            if (flag) {
                continue
            }
            //判断是否满足相加相等的 condition
            rowSum1 = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
            rowSum2 = grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2]
            rowSum3 = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2]

            columnSum1 = grid[i][j] + grid[i + 1][j] + grid[i + 2][j]
            columnSum2 = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1]
            columnSum3 = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2]

            leftDiagonalSum = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2]
            rightDiagonalSum = grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j]

            if (rowSum1 === rowSum2 &&
                rowSum2 === rowSum3 &&
                rowSum3 === columnSum1 &&
                columnSum1 === columnSum2 &&
                columnSum2 === columnSum3 &&
                columnSum3 === leftDiagonalSum &&
                leftDiagonalSum === rightDiagonalSum) {
                sum++
            }
        }
    }
    return sum
};
numMagicSquaresInside([
    [3, 10, 2, 3, 4],
    [4, 5, 6, 8, 1],
    [8, 8, 1, 6, 8],
    [1, 3, 5, 7, 1],
    [9, 4, 9, 2, 9]
])
