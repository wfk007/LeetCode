//Image Smoother
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    var current = 0,
        res = [],
        tem = [];
    for (var i = 0; i < M.length; i++) {
        tmp = []
        for (var j = 0; j < M[i].length; j++) {
            current = 0;
            count = 0;
            for (var m = i - 1; m <= i + 1; m++) {
                for (var n = j - 1; n <= j + 1; n++) {
                    if (m >= 0 && m < M.length && n >= 0 && n < M[i].length) {
                        current += M[m][n]
                        count++
                    } else {
                        current += 0;
                    }
                }
            }
            tmp.push(Math.floor(current / count))
        }
        res.push(tmp)
    }
    return res
};

console.log(imageSmoother([[0]]))

(function(){

})()

(function(){

}())
