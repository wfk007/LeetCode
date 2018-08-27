//Max Area of Island
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var maxAreaOfIsland = function (grid) {
//     var max = 0,
//         i, j, current,
//         tmp = [],
//         seen = [];

//     //initialize seen array
//     for (i = 0; i < grid.length; i++) {
//         tmp = []
//         for (j = 0; j < grid[i].length; j++) {
//             tmp.push(0)
//         }
//         seen.push(tmp)
//     }

//     for (i = 0; i < grid.length; i++) {
//         for (j = 0; j < grid[i].length; j++) {
//             current = recurrence(grid, i, j, seen)
//             max = current > max ? current : max
//         }
//     }
//     return max
// };

// function recurrence(grid, i, j, seen) {
//     if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || seen[i][j] === 1 || grid[i][j] === 0) {
//         return 0
//     } else {
//         seen[i][j] = 1
//         return 1 + recurrence(grid, i - 1, j, seen) + recurrence(grid, i + 1, j, seen) + recurrence(grid, i, j - 1, seen) + recurrence(grid, i, j + 1, seen)
//     }
// }
// console.log(maxAreaOfIsland([
//     [1, 1, 0, 1, 1],
//     [1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1],
//     [1, 1, 0, 1, 1]
// ]))

// function bubbleSort(arr) {
//     var tmp;
//     for (var i = 1; i < arr.length; i++) {
//         for (var j = 0; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 tmp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = tmp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([7,8,2,6,1,4,3,5]))

function quickSort(arr, l, r) {
    var i = l,
        j = r,
        base;
    if (l < r) {
        base = arr[i];
        while (i !== j) {
            while (i < j && arr[j] > base) {
                j--
            }
            if (i < j) {
                arr[i] = arr[j]
                i++
            }
            while (i < j && arr[i] < base) {
                i++
            }
            if (i < j) {
                arr[j] = arr[i]
                j--
            }
        }
        arr[i] = base
        quickSort(arr, l, i - 1)
        quickSort(arr, i + 1, r)
    }
}
var arr = [7, 8, 2, 6, 1, 4, 3, 5]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
