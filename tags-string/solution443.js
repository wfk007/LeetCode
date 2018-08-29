//String Compression
/**
 * @param {character[]} chars
 * @return {number}
 */

 ////有问题！！！
var compress = function (chars) {
    //考虑长度为 1 的情况
    var baseIndex = 0,
        base = chars[baseIndex],
        distance = 0;

    for (var i = 1; i <= chars.length; i++) {
        if (chars[i] !== base) {
            distance = i - baseIndex;
            if (distance >= 2) {
                //插字母
                chars.splice(baseIndex, distance, chars[baseIndex])
                //插数字
                for (var k = 0; k < distance.toString().length; k++) {
                    chars.splice(baseIndex + k + 1, 0, distance.toString()[k])
                }
            }
            //将 baseIndex 到 i 之间的数全部替换
            baseIndex = baseIndex + k + 1
            base = chars[baseIndex]
        }
    }
    console.log(chars)
    return chars.length
};
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))
