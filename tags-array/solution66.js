//Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
//     var flag = false;
//     for (var i = digits.length - 1; i >= 0; i--) {
//         if (flag) {
//             digits[i] += 1
//             if (digits[i] === 10) {
//                 digits[i] = 0
//                 flag = true
//             } else {
//                 flag = false;
//             }
//         } else {
//             if (i === digits.length - 1) {
//                 digits[i] += 1
//                 if (digits[i] === 10) {
//                     digits[i] = 0
//                     flag = true
//                 }
//             }else{
//                 return digits
//             }
//         }
//         if (i === 0 && flag) {
//             digits.unshift(1);
//             return digits
//         }
//     }
//     return digits
// };

console.log(plusOne([8,9,9,9]))

var plusOne = function (digits) {
    var n = digits.length;
    for (var i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return 
}
