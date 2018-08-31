//Count Binary Substrings
/**
 * @param {string} s
 * @return {number}
 */
// var countBinarySubstrings = function (s) {
//     if (s.length < 2) {
//         return 0
//     }
//     var
//         res = 0,
//         current0,
//         current1,
//         baseIndex,
//         flag;
//     for (var i = 0; i < s.length - 1; i++) {
//         //从 i 开始往后查找
//         baseIndex = i
//         flag = false
//         current0 = 0
//         for (var j = i + 1; j < s.length; j++) {
//             if (!flag) {
//                 if (s[j] !== s[baseIndex]) {
//                     flag = true
//                     current0 = j - baseIndex
//                     baseIndex = j
//                     if (current0 === 1) {
//                         res++
//                         break;
//                     }
//                 }
//             } else {
//                 if (s[j] !== s[baseIndex]) {
//                     break;
//                 } else {
//                     if (j - baseIndex + 1 === current0) {
//                         res++
//                         break;
//                     }
//                 }
//             }
//         }
//     }
//     return res
// };

var countBinarySubstrings = function (s) {
    var prevRunLength = 0, curRunLength = 1, res = 0;
    for (var i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]){
            curRunLength++;
        }else {
            prevRunLength = curRunLength;
            curRunLength = 1;
        }
        if (prevRunLength >= curRunLength){
            res++;
        }
    }
    return res;
}
var str = "10101"
console.log(countBinarySubstrings(str))
