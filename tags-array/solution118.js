//Pascal's Triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var
        res = [],
        beforeLine = null, //上一行
        thisLine = null; //当前行

    for (var i = 1; i <= numRows; i++) {
        thisLine = [];
        if (i === 1) {
            thisLine = [1]
        } else if (i === 2) {
            thisLine = [1, 1]
        } else {
            thisLine[0] = 1;
            thisLine[i - 1] = 1;
            for (var j = 1; j < i - 1; j++) {
                thisLine[j] = beforeLine[j - 1] + beforeLine[j]
            }
        }
        beforeLine = thisLine.slice(0, thisLine.length)
        res.push(thisLine)
    }
    return res
};
