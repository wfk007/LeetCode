/**
 * @param {number} M
 * @param {number} N
 * @return {number}
 */
var detectCapitalUse = function (M, N) {
    //M 对牛，第 N 个月牛的总数
    var sum = M,
        first = 0, //第一月的牛
        second = 0,
        third = 0,
        mature = M, //成熟期
        tmp;

    for (var i = 1; i <= N; i++) {
        tmp = mature;
        mature += third
        third = second
        second = first
        first = tmp
        sum = first + second + third + mature
    }
    return sum
}
console.log(detectCapitalUse(1,5))
